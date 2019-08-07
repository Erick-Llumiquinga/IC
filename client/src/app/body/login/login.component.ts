import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
    email: ['',[Validators.required,Validators.pattern('[^this.]+[^self.]+[a-z]+[0-9a-z-_.]')]],
    password: ['',[Validators.required, /*Validators.pattern('^(?=\w\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,16}$')*/]]
    })
  }

  validartorData = () =>{
    if(this.loginForm.valid){
      console.log('se valido')
      let datos = {
        nombreUsuario: this.loginForm.controls['email'].value,
        clave: this.loginForm.controls['password'].value
      }
      this.http.post(environment.url + `/login`, datos)
      .subscribe(res=>{
        this.router.navigate(['/home'])
      })
    }
    else{
      console.log('nose porque')
    }
  }

  get Email(){ return this.loginForm.get('email')};
  get Password(){ return this.loginForm.get('password')};
}
