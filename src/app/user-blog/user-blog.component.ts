import { Component, OnInit } from '@angular/core';
import { Blog } from '../user';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-blog',
  templateUrl: './user-blog.component.html',
  styleUrls: ['./user-blog.component.css']
})
export class UserBlogComponent implements OnInit{

  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllblog();


  }

  blog:Blog=new Blog();

  blogid:Blog | any=new Blog();
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

  
  addblog(blogForm: NgForm) {
    this.adminservice.addBlog(this.blog)
      .subscribe(data => {
        this.toastr.error('Successfully Add new Blog');
      },
      error =>{
         this.toastr.success('Successfully Add new Blog');
         this.getAllblog();
        }
    );
    blogForm.resetForm();
  }

  updateblog(blogupdateForm : NgForm){
    const idd=this.blogid.id
    this.adminservice.updateblog(idd,this.blogid,this.blog)
    .subscribe(data=>{
      this.toastr.error('Successfully Update Product Model');
      
    },
      error => {
        this.toastr.success('Successfully Updated Blog')
        this.getAllblog();
      }
    
    );
    blogupdateForm.resetForm();
 
}

  handleFileInput(event: any) {
    this.blog.file = event.target.files[0];
  }

  isFileSelected(): boolean {
    // Check if a file is selected
    return !!this.blog.file; // Assuming works.fa_logo is the selected file
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

  getblogbyId(id:any){
    this.adminservice.getblogid(id)
    .subscribe(data=>{
      this.blogid=data;
    })
  }

  deleteblog(id :any){
    this.adminservice.deleteblog(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllblog();
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
