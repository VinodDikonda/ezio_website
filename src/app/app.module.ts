import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { UserDashbordComponent } from './user-services/user-dashbord.component';
import { SidenavComponent } from './user-team/sidenav.component';
import { BodyComponent } from './user-product/body.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminHeaderComponent } from './user-client/admin-header.component';
import { AdminFooterComponent } from './user-works/admin-footer.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CarrerComponent } from './carrer/carrer.component';
import { UserCarrerComponent } from './user-carrer/user-carrer.component';
import { BlogComponent } from './blog/blog.component';
import { UserBlogComponent } from './user-blog/user-blog.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    UserDashbordComponent,
    SidenavComponent,
    BodyComponent,
    DashbordComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    UserGroupComponent,
    CarrerComponent,
    UserCarrerComponent,
    BlogComponent,
    UserBlogComponent,
    ReadBlogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
