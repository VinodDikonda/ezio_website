import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  constructor(private adminservice:AdminService){}

  ngOnInit(): void {
    this.getAllService();
    AOS.init({
      offset: 300, // Adjust when the animation starts relative to the element's position.
      duration: 1500, // Animation duration in milliseconds.
      once: true, // Whether animations should be applied only once.
    });  }
    isScrolled: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    colors: string[] = ['bg-danger', 'bg-primary', 'bg-warning', 'bg-info', 'bg-success']; // Add more colors if needed

    
    getservice:any;

public getAllService(){
  this.adminservice.getAllService()
  .subscribe(ans=>{
    this.getservice=ans;
    console.log(ans)
  })

}


}
