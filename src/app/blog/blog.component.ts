import { Component,HostListener, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  constructor(private adminservice:AdminService,private router:Router){}


  ngOnInit(): void {
    this.getAllblog();
  }


  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    getBlog : any;

    getAllblog(){
      this.adminservice.getAllblog()
      .subscribe(data=>{
        this.getBlog=data
        console.log(data)
      })
    }
    getBase64Image(base64String: string) {
      return `data:image/jpeg;base64,${base64String}`;
    }

    readbutton(id :any){
    this.router.navigate(['/blog/readBlog',{id:id}])

    }
}
