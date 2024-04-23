import { Component, OnInit,HostListener, ElementRef, AfterViewInit, ViewChild,Renderer2 } from '@angular/core';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('counter') counterElement!: ElementRef;
  @ViewChild('counter1') counterElement1!: ElementRef;
  @ViewChild('counter2') counterElement2!: ElementRef;

  constructor(private adminservice:AdminService,private renderer: Renderer2, private elementRef: ElementRef){}


  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter();
          observer.unobserve(this.counterElement.nativeElement);
          observer.unobserve(this.counterElement1.nativeElement);
          observer.unobserve(this.counterElement2.nativeElement);

        }
      });
    });
    observer.observe(this.counterElement.nativeElement);
    observer.observe(this.counterElement1.nativeElement);
    observer.observe(this.counterElement1.nativeElement);

  }
  
  animateCounter() {
    const start = 1;
    const end = 10;
    const end1 = 2;
    const end2 = 30;
    const duration = 2000; // duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const stepTime1 = Math.abs(Math.floor(duration / (end1 - start)));
    const stepTime2 = Math.abs(Math.floor(duration / (end2 - start)));

    let currentNumber1 = start;
    let currentNumber2 = start;
    let currentNumber3 = start;

    const counterElement = this.counterElement.nativeElement;
    const counterElement1 = this.counterElement1.nativeElement;
    const counterElement2 = this.counterElement2.nativeElement;

    const timer1 = setInterval(() => {
      counterElement.textContent = currentNumber1.toString();
      currentNumber1++;
      if (currentNumber1 > end) {
        clearInterval(timer1);
      }
    }, stepTime);

    const timer2 = setInterval(() => {
      counterElement1.textContent = currentNumber2.toString();
      currentNumber2++;
      if (currentNumber2 > end1) {
        clearInterval(timer2);
      }
    }, stepTime1);

    const timer3 = setInterval(() => {
      counterElement2.textContent = currentNumber3.toString();
      currentNumber3++;
      if (currentNumber3 > end2) {
        clearInterval(timer3);
      }
    }, stepTime2);
}
  
  ngOnInit(): void {
    this.getAllService();
    this.getAllWork();
    this.getAllClient();
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
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      nav: true
    }

    customOptionss: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        }
      },
      nav: true
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

  getClient : any;

  getAllClient(){
    this.adminservice.getAllClient()
    .subscribe(data=>{
      this.getClient=data
    })
  }

}
