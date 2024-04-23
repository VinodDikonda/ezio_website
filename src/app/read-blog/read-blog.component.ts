import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Blog } from '../user';

@Component({
  selector: 'app-read-blog',
  templateUrl: './read-blog.component.html',
  styleUrls: ['./read-blog.component.css']
})
export class ReadBlogComponent implements OnInit {
  constructor(private adminservice: AdminService, private activeroute: ActivatedRoute) { }

  
  getBase64Image(base64String: string) {
    return `data:image/jpeg;base64,${base64String}`;
  }
  alldata : any;

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get('id');
    console.log(id);

    
    this.adminservice.getblogid(id)
    .subscribe(data => {
      this.alldata = [data];
      console.log(this.alldata);
    });
  
  }
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }


}
