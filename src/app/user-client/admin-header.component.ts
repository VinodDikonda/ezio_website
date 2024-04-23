import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit{
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllClient();
  }

  client:Client =new Client();

  clientid:Client | any =new Client();

  addclient(clientForm:NgForm){
    this.adminservice.addclient(this.client)
      .subscribe(data=>{
        this.toastr.error('Successfully Add new Client Review');
      },
      error =>{
        this.toastr.success('Successfully Add new Client Review')
        this.getAllClient();

      }
      );
      clientForm.reset();
  }
  
  updateclient(workclientForm : NgForm){
    const idd=this.clientid.id
    this.adminservice.updateclient(idd,this.clientid,this.client)
    .subscribe(data=>{
      this.toastr.error('Successfully Update Client Review Model');
      
    },
      error => {
        this.toastr.success('Successfully Update Client Review Model')
        this.getAllClient()

      }
      
    );
    workclientForm.resetForm();
 
}

  handleFileInput(event: any) {
    this.client.file = event.target.files[0];
  }
  isFileSelected(): boolean {
    // Check if a file is selected
    return !!this.client.file; // Assuming works.fa_logo is the selected file
  }
  getClient : any;

  getAllClient(){
    this.adminservice.getAllClient()
    .subscribe(data=>{
      this.getClient=data
    })
  }

  getBase64Image(base64String: string) {
    return `data:image/jpeg;base64,${base64String}`;
  }

  getClientbyId(id:any){
    this.adminservice.getclientid(id)
    .subscribe(data=>{
      this.clientid=data;
    })
  }
  deleteclient(id :any){
    this.adminservice.deleteclient(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllClient();
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
