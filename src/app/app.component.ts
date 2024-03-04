import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  constructor(private loginService:LoginService){
    
  }
  ngOnInit(): void {
   
    firebase.initializeApp({
      apiKey: "AIzaSyCELgi39UV9rmLUxxpaICRAkuhgAXjMIPg",

      authDomain: "angularprueba-7e751.firebaseapp.com",
    
      

    });

  }


 estaLogueado(){

  return this.loginService.estaLogeado();
 }
  
 logout(){

  this.loginService.logOut();
 }
  

}
