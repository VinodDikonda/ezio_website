import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Carrer, Email_Career } from '../user';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {

  @ViewChild('fileInput') fileInputRef!: ElementRef;

  constructor(private adminservice: AdminService, private toastr: ToastrService) { }

  emailcareer: Email_Career = new Email_Career();
  carrerid: Carrer | any = new Carrer();
  getCarrer: any;

  ngOnInit(): void {
    this.getAllCarrer();
    AOS.init({
      offset: 200, // Adjust when the animation starts relative to the element's position.
      duration: 1500, // Animation duration in milliseconds.
      once: true, // Whether animations should be applied only once.
    });
  }
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }


  validateFile(fileInput: any) {
    fileInput.classList.add('ng-touched');
  }
  getAllCarrer() {
    this.adminservice.getAllcarrer()
      .subscribe(data => {
        this.getCarrer = data
      })
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.emailcareer.file = file;
    }
  }

  addcarrer(carrerForm: NgForm) {
    // Show loading spinner
    const swalPromise = swal({
      title: 'Processing...',
      text: 'Please wait...',
      icon: 'info',
    });


    const formData = new FormData();
    formData.append('subject', this.carrerid.job_name); // Sending job_name as subject
    formData.append('name', this.emailcareer.name);
    formData.append('phone_no', this.emailcareer.phone_no);
    formData.append('email', this.emailcareer.email);
    formData.append('year', this.emailcareer.year);
    formData.append('months', this.emailcareer.months);

    const fileInput = this.fileInputRef.nativeElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]);
    }
    console.log(formData);

    this.adminservice.addEmail_Career(formData)
      .subscribe(response => {
        console.log(response); // Log the response
        // Hide loading spinner if swal is defined
        swalPromise.then(swalInstance => {
          swalInstance.close();
          // Display success swal notification
          swal("Approved!", "Success Apply for " + this.carrerid.job_name + " .", "success");
        });
        swal("Approved!", "Success Apply for " + this.carrerid.job_name + " .", "success");
      }, error => {
        swalPromise.then(swalInstance => {
          swalInstance.close();
          // Display error swal notification
          swal("Oops!", "Something went wrong.", "error");
        });
      });
    carrerForm.reset();
  }


  getCarrerbyId(id: any) {
    this.adminservice.getCarrerid(id)
      .subscribe(data => {
        console.log(data)
        this.carrerid = data;
      })
  }
}




