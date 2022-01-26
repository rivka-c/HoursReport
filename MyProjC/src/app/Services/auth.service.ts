import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { ActivatedRoute, Router } from "@angular/router";
const url=environment.apiUrl+ "User/";


@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    loggedIn = false;
   
    
    MyUser:User=new User();

    constructor(public httpClient:HttpClient,  private _router: Router,private route:ActivatedRoute){}
    isAuth(){
        return this.loggedIn;
    }


    login(email: string) {
        this.loggedIn=true;
        this.httpClient.get(url+"?user="+email).subscribe((res:any)=>{
            
        this.MyUser=res;
        if(this.MyUser.role==0)
        { 
           this.loggedIn=false;
           
        }
        else
        {
            this.loggedIn=true;
        }
        
      
      this._router.navigate(['Home']);
    
       
    });
}


  
}