import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProperty } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public baseURL:string="https://localhost:44325/api";
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  public getProduct(){
    return this.http.get(`${this.baseURL}/Products`)
  }
  public getProperties(){
    return this.http.get(`${this.baseURL}/GetProperties`);
  }
  public postProperties(data:any){
    const postData=`${this.baseURL}/PostProperties`;
    return this.http.post<IProperty[]>(postData,data);
  }
  public deleteProperty(id:any){
    // let deleteProp = '/DeleteProperties/'
    return this.http.delete(`${this.baseURL}/DeleteProperties/${id}`)
  }
}
