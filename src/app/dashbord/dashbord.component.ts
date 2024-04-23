import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  constructor(private adminservice:AdminService,private router:Router){}
  ngOnInit(): void {
    this.countwork();
    this.countblog();
    this.countcareer();
    this.countclient();
    this.countemployes();
    this.countproduct();
    this.countservice();
    
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

  work :any;
  service : any;
  team : any;
  career:any;
  client:any;
  product:any;
  blog:any;

  countwork(){
    this.adminservice.workcount()
    .subscribe(data=>{
      this.work=data;
    })
  }

  countservice(){
    this.adminservice.servicecount()
    .subscribe(data=>{
      this.service=data;
    })
  }

  countemployes(){
    this.adminservice.teamcount()
    .subscribe(data=>{
      this.team=data;
    })
  }

  countcareer(){
    this.adminservice.carrercount()
    .subscribe(data=>{
      this.career=data;
    })
  }

  countclient(){
    this.adminservice.clientcount()
    .subscribe(data=>{
      this.client=data;
    })
  }

  countproduct(){
    this.adminservice.productcount()
    .subscribe(data=>{
      this.product=data;
    })
  }
  countblog(){
    this.adminservice.blogcount()
    .subscribe(data=>{
      this.blog=data;
    })
  }

}
