import { Component, OnInit , HostListener} from '@angular/core';
import * as AOS from 'aos';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Email_Contact } from '../user';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private adminservice: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
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
    
    emailContact : Email_Contact =new Email_Contact();

    addcontact(ContactForm: NgForm){

      
      const formData = new FormData();
      formData.append('name', this.emailContact.name);
    formData.append('subject', this.emailContact.subject); // Sending job_name as subject
    formData.append('email', this.emailContact.email);
    formData.append('msg', this.emailContact.msg);
    console.log(formData);


    this.adminservice.addEmail_Contact(formData)
    .subscribe(response => {
      this.toastr.error('Message Send Successfully'); 

      console.log(response); // Log the response
      // Hide loading spinner if swal is defined
      
    }, error => {
      this.toastr.success('Message Send Successfully'); 

      });
      ContactForm.reset();
    }


}
