import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private adminservice:AdminService){}

  ngOnInit(): void {
    this.getAllproduct();
    AOS.init({
      offset: 200, // Adjust when the animation starts relative to the element's position.
      duration: 1000, // Animation duration in milliseconds.
      once: true, // Whether animations should be applied only once.
    });  }
    
    isScrolled: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    getproduct : any;

    getAllproduct(){
      this.adminservice.getAllproduct()
      .subscribe(data=>{
        this.getproduct=data
      })
    }
    getBase64Image(base64String: string) {
      return `data:image/jpeg;base64,${base64String}`;
    }
}
