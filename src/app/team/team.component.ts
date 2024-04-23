import { Component, OnInit, HostListener } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  constructor(private adminservice:AdminService){}

  ngOnInit(): void {
    this.getAllTeam();
    this.getAllgrouppic();
  }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
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

  getgrouppic : any;

getAllgrouppic(){
  this.adminservice.getAllGrouppic()
  .subscribe(data=>{
    this.getgrouppic=data
  })
}
}
