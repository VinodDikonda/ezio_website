import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../user';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  constructor(private router:Router,private adminservice:AdminService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllproduct();

  }

  product:Product=new Product();

  productid:Product | any = new Product();

  addproduct(productForm: NgForm) {
    this.adminservice.addProduct(this.product)
      .subscribe(data => {
        this.toastr.error('Successfully Add new Product');
      },
      error =>{
         this.toastr.success('Successfully Add new Product Model')
         this.getAllproduct();

        }
    );
    productForm.resetForm();
  }
 
  updateproduct(productupdateForm : NgForm){
    const idd=this.productid.id
    this.adminservice.updateproduct(idd,this.productid,this.product)
    .subscribe(data=>{
      this.toastr.error('Successfully Update Product Model');
      
    },
      error => {
        this.toastr.success('Successfully Updated Product Model')
        this.getAllproduct();
      }
    
    );
    productupdateForm.resetForm();
 
}
  handleFileInput(event: any) {
    this.product.file = event.target.files[0];
  }
  isFileSelected(): boolean {
    // Check if a file is selected
    return !!this.product.file; // Assuming works.fa_logo is the selected file
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

  getproductbyId(id:any){
    this.adminservice.getProductid(id)
    .subscribe(data=>{
      this.productid=data;
    })
  }

  deleteproduct(id :any){
    this.adminservice.deleteprodcut(id)
    .subscribe(data=>{
      this.toastr.success('Successfully Deleted...')
      this.getAllproduct();
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
