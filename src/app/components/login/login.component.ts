import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  person: User;
  showAlert: boolean= false;

  constructor(private router: Router) { }


  ngOnInit() { 
  this.person= new User();
   
  }

  logForm(form: NgForm) {

    if (this.person.pass !== "prueba" || this.person.username !== "prueba") {
      this.showAlert=true;
    }

    if (this.person.pass === "prueba" && this.person.username === "prueba") {
      this.router.navigate(['home']);
      console.log('tiene acceso')
    }

  }


}