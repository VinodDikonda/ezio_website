import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Grouppic } from '../user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit{
  ngOnInit(): void {
    this.getAllgrouppic();
  }
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  group:Grouppic= new Grouppic();
  
  groupid:Grouppic  | any= new Grouppic(); 

  addgrouppic(grouppicForm:NgForm){
    this.adminservice.addgropupic(this.group)
      .subscribe(data=>{
        this.toastr.error('Successfully Add new photo');
      },
      error =>{
        this.toastr.success('Successfully Add new photo');
        this.getAllgrouppic();
      }
      );
      grouppicForm.reset();
  }

  updategrouppic(grouppicForm : NgForm){
    const idd=this.groupid.id
    this.adminservice.updategrouppic(idd,this.groupid,this.group)
    .subscribe(data=>{
      this.toastr.error('Successfully Update photo');
    },
      error => {
        this.toastr.success('Successfully Update photo')
        this.getAllgrouppic();
      }
    );
    grouppicForm.resetForm();
}

handleFileInput(event: any) {
  this.group.file = event.target.files[0];
}
isFileSelected(): boolean {
  // Check if a file is selected
  return !!this.group.file; // Assuming works.fa_logo is the selected file
}
getgrouppic : any;

getAllgrouppic(){
  this.adminservice.getAllGrouppic()
  .subscribe(data=>{
    this.getgrouppic=data
  })
}

getBase64Image(base64String: string) {
  return `data:image/jpeg;base64,${base64String}`;
}

getgrouppicbyId(id:any){
  this.adminservice.getGrouppicid(id)
  .subscribe(data=>{
    this.groupid=data;
  })
}

deletegrouppic(id :any){
  this.adminservice.deleteGrouppic(id)
  .subscribe(data=>{
    this.toastr.success('Successfully Deleted...')
    this.getAllgrouppic();
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
