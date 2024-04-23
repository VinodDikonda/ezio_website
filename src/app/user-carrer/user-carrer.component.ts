import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Carrer } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-carrer',
  templateUrl: './user-carrer.component.html',
  styleUrls: ['./user-carrer.component.css']
})
export class UserCarrerComponent implements OnInit{
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}
  ngOnInit(): void {
    this.getAllCarrer();
  }

  showNextInput(input: any) {
    // Get the current input's ID
    let currentId = input.id;

    // Get the next input's ID
    let nextId = parseInt(currentId.replace('discription', '')) + 1;

    // Show the next input field
    let nextInput = document.getElementById('discription' + nextId + '-group');
    if (nextInput) {
      nextInput.style.display = 'block';
    }
  }
  
  carrer: Carrer =new Carrer();
  carrerid:Carrer | any =new Carrer();


  addcarrer(carrerForm : NgForm){
    this.adminservice.addCarrer(this.carrer)
    .subscribe(data=>{
      this.toastr.success('Successfully Add new Career');
      this.getAllCarrer();
    },
    error => {
      this.toastr.error('Error to Add new Career')
      this.getAllCarrer();

    }
    )
    carrerForm.reset();

  }

  getCarrer : any;

  getAllCarrer(){
    this.adminservice.getAllcarrer()
    .subscribe(data=>{
      this.getCarrer=data
    })
  }

  deleteCarrer(id :any){
    this.adminservice.deleteCarrer(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllCarrer();
    })
  }

  getCarrerbyId(id:any){
    this.adminservice.getCarrerid(id)
    .subscribe(data=>{
      console.log(data)
      this.carrerid=data;
    })
  }
  updatecareers(CareersForm : NgForm){
    console.log(this.carrerid)
    this.adminservice.addCarrer(this.carrerid)
    .subscribe(data=>{
      this.toastr.success('Successfully Update Career');
      this.getAllCarrer();
    },
    error => {
      this.toastr.error('Error to Update new Career')
      this.getAllCarrer();

    }
    )
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
