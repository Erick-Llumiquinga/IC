import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuild:FormBuilder, private router:Router, private http:HttpClient) { }

  loginForm: FormGroup;
  
  ngOnInit() {
    this.userLogin();
  }

  userLogin = () => {
    this.loginForm = this.formBuild.group({
    email: ['',[Validators.required,Validators.pattern('[^this.]+[^self.]+[a-z]+[0-9a-z-_.]*@[a-z]+[a-z0-9]*.[a-z]{2,3}.*[a-z]{2,3}')]],
    password: ['',[Validators.required, /*Validators.pattern('^(?=\w\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,16}$')*/]]
    })
  }

  validartorData = () =>{
    let datos = {
      userName: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    } 
    if(this.loginForm.valid){
      /*this.http.post(environment.url + `login`, datos)
      .subscribe(res=>{
        this.router.navigate(['/home'])
      })*/
    }
  }

  

  get Email(){ return this.loginForm.get('email')};
  get Password(){ return this.loginForm.get('password')};
}
