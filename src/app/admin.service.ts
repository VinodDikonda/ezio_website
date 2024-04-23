import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, Product, Service, Team, Works, Grouppic, Carrer, Email_Career, Blog } from './user';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

 // service api
  addService(service: Service){
    return this.httpClient.post(`${baseUrl}/addService`,service)
  }

  getAllService(){
    return this.httpClient.get<Service[]>(`${baseUrl}/getAllService`);
  }

  deleteService(id : any){
    return this.httpClient.delete(`${baseUrl}/deleteService/`+id)
  }
  servicecount(){
    return this.httpClient.get(`${baseUrl}/getservicecount`);

  }
  // Works api
  addWorks(works: Works){
    
    const formData = new FormData();
  formData.append('tittle', works.tittle);
  formData.append('discription', works.discription);
  formData.append('file', works.file);

  console.log(works);
    return this.httpClient.post<any>(`${baseUrl}/addWork`,formData)
  }
  updatework(id: any, works: Works, worksimg:Works) {
    const formData = new FormData();
    formData.append('id',works.id);
    formData.append('tittle', works.tittle);
    formData.append('discription', works.discription);
    formData.append('file', worksimg.file);
    console.log(formData.get('file')); // Log the file data

    console.log(id,works,worksimg);
  
  
    return this.httpClient.put(`${baseUrl}/updateWork/${id}`, formData);
  }
  
  getAllWork(){
    return this.httpClient.get<Works[]>(`${baseUrl}/getAllWork`);
  }

  // deleteWorks(id :any){
  //   return this.httpClient.delete(`${baseUrl}/deleteWork/`+id)
  // }

  getworkid(id :any){
    return this.httpClient.get(`${baseUrl}/getWorkId/`+id);
  }

  deleteWork(id:any){
    return this.httpClient.delete(`${baseUrl}/deletework/`+id)
  }
 
  workcount(){
    return this.httpClient.get(`${baseUrl}/getworkcount`);

  }
  // client review api
  addclient(client: Client){
    
    const formData = new FormData();
  formData.append('comName', client.comName);
  formData.append('tittle', client.tittle);
  formData.append('discription', client.discription);
  formData.append('file', client.file);

  console.log(client);
    return this.httpClient.post<any>(`${baseUrl}/addclient`,formData)
  }
  updateclient(id: any, client: Client, clientimg:Client) {
    const formData = new FormData();
    formData.append('id',client.id);
    formData.append('comName',client.comName);
    formData.append('tittle', client.tittle);
    formData.append('discription', client.discription);
    formData.append('file', clientimg.file);
    console.log(formData.get('file')); // Log the file data

    console.log(id,client,clientimg);
  
  
    return this.httpClient.put(`${baseUrl}/updateClient/${id}`, formData);
  }

  getAllClient(){
    return this.httpClient.get<Client[]>(`${baseUrl}/getAllClient`);
  }

  getclientid(id :any){
    return this.httpClient.get(`${baseUrl}/getClientId/`+id);
  }

  deleteclient(id:any){
    return this.httpClient.delete(`${baseUrl}/deletclient/`+id)
  }
  clientcount(){
    return this.httpClient.get(`${baseUrl}/getclientcount`);

  }
  //product api
  addProduct(product: Product){
    const formData = new FormData();
  formData.append('tittle', product.tittle);
  formData.append('discription', product.discription);
  formData.append('file', product.file);

  console.log(product);
    return this.httpClient.post<any>(`${baseUrl}/addproduct`,formData)
  }
  updateproduct(id: any, product: Product, productid:Product) {
    const formData = new FormData();
    formData.append('id',product.id);
    formData.append('tittle', product.tittle);
    formData.append('discription', product.discription);
    formData.append('file', productid.file);
    console.log(formData.get('file')); // Log the file data

    console.log(id,product,productid);
  
  
    return this.httpClient.put(`${baseUrl}/updateProduct/${id}`, formData);
  }

  getAllproduct(){
    return this.httpClient.get<Product[]>(`${baseUrl}/getAllproduct`);
  }
  getProductid(id :any){
    return this.httpClient.get(`${baseUrl}/getproductId/`+id);
  }

  deleteprodcut(id:any){
    return this.httpClient.delete(`${baseUrl}/deleteproduct/`+id)
  }

  productcount(){
    return this.httpClient.get(`${baseUrl}/getsproductcount`);

  }

  //team api
  addteam(team: Team){
    const formData = new FormData();
  formData.append('name', team.name);
  formData.append('work', team.work);
  formData.append('file', team.file);

  console.log(team);
    return this.httpClient.post<any>(`${baseUrl}/addTeam`,formData)
  }

  updateTeam(id: any, team: Team, teamid:Team) {
    const formData = new FormData();
    formData.append('id',team.id);
    formData.append('name', team.name);
    formData.append('work', team.work);
    formData.append('file', teamid.file);
    console.log(formData.get('file')); // Log the file data

    console.log(id,team,teamid);
  
  
    return this.httpClient.put(`${baseUrl}/updateTeam/${id}`, formData);
  }

  getAllTeam(){
    return this.httpClient.get<Team[]>(`${baseUrl}/getAllTeam`);
  }
  getTeamid(id :any){
    return this.httpClient.get(`${baseUrl}/getTeamId/`+id);
  }

  deleteTeam(id:any){
    return this.httpClient.delete(`${baseUrl}/deleteteam/`+id)
  }
  teamcount(){
    return this.httpClient.get(`${baseUrl}/getteamcount`);

  }
  //group pic al=pi
  addgropupic(grouppic: Grouppic){
    const formData = new FormData();
  formData.append('file', grouppic.file);

  console.log(grouppic);
    return this.httpClient.post<any>(`${baseUrl}/addgrouppic`,formData)
  }

  updategrouppic(id: any, grouppic: Grouppic, grouppicid:Grouppic) {
    const formData = new FormData();
    formData.append('id',grouppic.id);
    formData.append('file', grouppicid.file);
    console.log(formData.get('file')); // Log the file data

    console.log(id,Grouppic,Grouppic);
  
  
    return this.httpClient.put(`${baseUrl}/updategrouppic/${id}`, formData);
  }

  getAllGrouppic(){
    return this.httpClient.get<Grouppic[]>(`${baseUrl}/getAllgrouppic`);
  }
  getGrouppicid(id :any){
    return this.httpClient.get(`${baseUrl}/getgrouppicId/`+id);
  }

  deleteGrouppic(id:any){
    return this.httpClient.delete(`${baseUrl}/deletegrouppic/`+id)
  }

  //carrer api
  getAllcarrer(){
    return this.httpClient.get<Carrer[]>(`${baseUrl}/getallcarrer`);
  }

  addCarrer(carrer: Carrer){
    return this.httpClient.post(`${baseUrl}/addCarrer`,carrer);
  }

  deleteCarrer(id:any){
    return this.httpClient.delete(`${baseUrl}/deletecarrer/`+id);
  }

  getCarrerid(id:any){
    return this.httpClient.get(`${baseUrl}/getCarrerbyid/`+id);
  }
  carrercount(){
    return this.httpClient.get(`${baseUrl}/getcarrercount`);

  }

// Email_Career api
  addEmail_Career(formData: FormData){
    console.log(formData);
    return this.httpClient.post<any>(`${baseUrl}/sendemailpart`,formData)
  }

  // Email_Contact api
  addEmail_Contact(formData: FormData){
    console.log(formData);
    return this.httpClient.post<any>(`${baseUrl}/sendemailcontact`,formData)
  }

  // blog api
  addBlog(blog: Blog){
    const formData = new FormData();
  formData.append('subject', blog.subject);
  formData.append('tittle', blog.tittle);
  formData.append('discription', blog.discription);
  formData.append('discription1', blog.discription1);
  formData.append('discription2', blog.discription2);
  formData.append('disclaimer', blog.disclaimer);
  formData.append('file', blog.file);
  console.log(blog);
    return this.httpClient.post<any>(`${baseUrl}/addBlog`,formData)
  }

  updateblog(id: any, blog: Blog, blogid:Blog) {
    const formData = new FormData();
    formData.append('id',blog.id);
    formData.append('subject', blog.subject);
    formData.append('tittle', blog.tittle);
    formData.append('discription', blog.discription);
    formData.append('discription1', blog.discription1);
    formData.append('discription2', blog.discription2);
    formData.append('disclaimer', blog.disclaimer);
    formData.append('file', blogid.file);   
    return this.httpClient.put(`${baseUrl}/updateblog/${id}`, formData);
  }
  
  getAllblog(){
    return this.httpClient.get<Blog[]>(`${baseUrl}/getAllblog`);
  }
  getblogid(id :any) : Observable<any[]>{
    return this.httpClient.get<any[]>(`${baseUrl}/getblogId/`+id);
  }

  deleteblog(id:any){
    return this.httpClient.delete(`${baseUrl}/deleteblog/`+id)
  }

  blogcount(){
    return this.httpClient.get(`${baseUrl}/getblogcount`);

  }
}
