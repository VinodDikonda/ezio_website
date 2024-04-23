import { Component, OnInit } from '@angular/core';
import { Works } from '../user';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit{
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllWork();
  }

  works:Works =new Works();

 worksid: Works | any = new Works();

  addworks(workForm: NgForm) {
    console.log(this.works); // Check the works object before submitting
    this.adminservice.addWorks(this.works)
      .subscribe(data => {
        console.log("jjjjjjjkl"+data)
        this.toastr.error('Successfully Add new Works');
      },
      error =>{
         this.toastr.success('Successfully Add new Works Model')
         this.getAllWork();
        }
    );
    workForm.resetForm();
  }

  updateworks(workupdateForm : NgForm){
      console.log(this.worksid)
      console.log(this.works)

      const idd=this.worksid.id
      this.adminservice.updatework(idd,this.worksid,this.works)
      .subscribe(data=>{
        this.toastr.error('Successfully Update Works Model');
        
      },
        error => {
          this.toastr.success('Successfully Updated Works Model')
          this.getAllWork();
        }
      
      );
      workupdateForm.resetForm();
   
  }



  handleFileInput(event: any) {
    this.works.file = event.target.files[0];
  }
  isFileSelected(): boolean {
    // Check if a file is selected
    return !!this.works.file; // Assuming works.fa_logo is the selected file
  }
  getWorks : any;

  getAllWork(){
    this.adminservice.getAllWork()
    .subscribe(data=>{
      this.getWorks=data
      console.log("getWork",this.getWorks);
    })
  }

  getBase64Image(base64String: string) {
    return `data:image/jpeg;base64,${base64String}`;
  }

  // work:Works={
  //   id: '',
  //   tittle: '',
  //   discription: '',
  //   file: ''
  // }

  getworkbyId(id:any){
    alert(id)
    this.adminservice.getworkid(id)
    .subscribe(data=>{
      this.worksid=data;
      console.warn(this.worksid)
    })
  }
  
  deletework(id :any){
    this.adminservice.deleteWork(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllWork();
    })
  }
  logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      sessionStorage.setItem("islogin", "false");
      //this.myservice.setLoggedIn(true);
      this.router.navigate(['/admin-login']);
    }
  }
  toggleFullScreen() {
    const doc = window.document as any; // Use 'any' type assertion

    const requestFullScreen = doc.documentElement.requestFullscreen 
      || doc.documentElement.mozRequestFullScreen 
      || doc.documentElement.webkitRequestFullScreen 
      || doc.documentElement.msRequestFullscreen;

    const exitFullScreen = doc.exitFullscreen 
      || doc.mozCancelFullScreen 
      || doc.webkitExitFullscreen 
      || doc.msExitFullscreen;

    if (!doc.fullscreenElement 
      && !doc.mozFullScreenElement 
      && !doc.webkitFullscreenElement 
      && !doc.msFullscreenElement) {
      requestFullScreen.call(doc.documentElement);
    } else {
      exitFullScreen.call(doc);
    }
  }
}
