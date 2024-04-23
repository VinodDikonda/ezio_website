import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { UserDashbordComponent } from './user-services/user-dashbord.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminFooterComponent } from './user-works/admin-footer.component';
import { AdminHeaderComponent } from './user-client/admin-header.component';
import { BodyComponent } from './user-product/body.component';
import { SidenavComponent } from './user-team/sidenav.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CarrerComponent } from './carrer/carrer.component';
import { UserCarrerComponent } from './user-carrer/user-carrer.component';
import { BlogComponent } from './blog/blog.component';
import { UserBlogComponent } from './user-blog/user-blog.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { authGuard } from './auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"team",component:TeamComponent},
  {path:"contact",component:ContactComponent},
  {path:"product",component:ProductsComponent},
  {path:"career",component:CarrerComponent},
  {path: "admin-login",component:LoginComponent},
  {path:"dashbord",component:DashbordComponent,canActivate:[authGuard]},
  {path:"user-service",component:UserDashbordComponent,canActivate:[authGuard]},
  {path:"user-works",component:AdminFooterComponent,canActivate:[authGuard]},
  {path:"client-review",component:AdminHeaderComponent,canActivate:[authGuard]},
  {path:"user-product",component:BodyComponent,canActivate:[authGuard]},
  {path:"user-employee",component:SidenavComponent,canActivate:[authGuard]},
  {path:"user-team",component:UserGroupComponent,canActivate:[authGuard]},
  {path:"user-career",component:UserCarrerComponent,canActivate:[authGuard]},
  {path:"blog",component:BlogComponent},
  {path:"user-blog",component:UserBlogComponent,canActivate:[authGuard]},
  {path:"blog/readBlog",component:ReadBlogComponent},
  {path:'**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
