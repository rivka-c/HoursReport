import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  

  private _destroySub$ = new Subject<void>();
  
  constructor(
  
 
    private authService: AuthService
  ) {}

   ngOnInit() {
    
  }
   onSubmit() {
    
    this.loginValid = true;
    this.authService.login(this.username);
    
  }
}