import { Component, OnInit } from '@angular/core';
import { Team } from '../user';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllTeam();
  }

  team:Team = new Team();

  teamid:Team | any= new Team();

  
  addTeam(teamForm: NgForm) {
    this.adminservice.addteam(this.team)
      .subscribe(data => {
        this.toastr.error('Successfully Add new Team');
      },
      error =>{
         this.toastr.success('Successfully Add new Team member');
         this.getAllTeam();
        }
    );
    teamForm.resetForm();
  }

  updateteam(workteamForm : NgForm){
    const idd=this.teamid.id
    this.adminservice.updateTeam(idd,this.teamid,this.team)
    .subscribe(data=>{
      this.toastr.error('Successfully Update Team Model');
      
    },
      error => {
        this.toastr.success('Successfully Updated Team Model')
        this.getAllTeam();
      }
    
    );
    workteamForm.resetForm();
 
}

  handleFileInput(event: any) {
    this.team.file = event.target.files[0];
  }
  isFileSelected(): boolean {
    // Check if a file is selected
    return !!this.team.file; // Assuming works.fa_logo is the selected file
  }
  getTeam : any;

  getAllTeam(){
    this.adminservice.getAllTeam()
    .subscribe(data=>{
      this.getTeam=data
    })
  }


  getBase64Image(base64String: string) {
    return `data:image/jpeg;base64,${base64String}`;
  }

  getteambyId(id:any){
    this.adminservice.getTeamid(id)
    .subscribe(data=>{
      this.teamid=data;
    })
  }

  deleteteam(id :any){
    this.adminservice.deleteTeam(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllTeam();
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
