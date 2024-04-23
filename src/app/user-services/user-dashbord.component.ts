import { Component, OnInit } from '@angular/core';
import { Service } from '../user';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent implements OnInit{
constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllService();
  }

service:Service =new Service();

addService(serviceForm: NgForm){
  console.log(this.service);
  this.adminservice.addService(this.service)
  .subscribe(data=>{
    this.getAllService();
    this.toastr.success('Successfully Add new Service');
    serviceForm.resetForm();

  },
  error=>this.toastr.error('Error To Add Service')  
  )
}
 
getservice:any;

public getAllService(){
  this.adminservice.getAllService()
  .subscribe(ans=>{
    this.getservice=ans;
    console.log(ans)
  })

}
deleteservice(id:any){
  this.adminservice.deleteService(id)
  .subscribe(ans=>{
    this.getAllService();
    this.toastr.success('Successfully delete Service');

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
