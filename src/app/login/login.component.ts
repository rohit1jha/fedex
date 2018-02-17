import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes  } from '@angular/router';

import { LoginService } from '../login.service';
import  'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  private errorMsgs:boolean=false;
  public loginInfoPin;
  private route1;
  private pin;

  constructor(private loginService: LoginService,router :Router) { 
   // loginService.loginPin(1111);
   this.route1=router;
   }

  ngOnInit() {
    
  }

  public loginIn(){
    var pinNumber = document.getElementsByName('pin')["0"].value
    if(pinNumber == ''){
      this.errorMsgs = true;
      return false;
    }else{
      this.errorMsgs = false;
      this.loginService.loginPin(pinNumber)
      .subscribe(res=>{
        this.pin=res;
        if(this.pin.PIN==pinNumber){
            this.route1.navigate(['create-order']);
        }else{
          this.errorMsgs=true;
        }
      })
      return false;
    }

  }

}
