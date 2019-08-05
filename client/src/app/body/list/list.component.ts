import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private formBuild:FormBuilder, private router:Router) { }

  loginForm: FormGroup;  
  email: string;
  password: string;
  message: string;
  telefonos: FormArray;
  inputsType: any[];
  selectType: number;
  type: string;
  inputType: string;
  
  ngOnInit() {
    this.email = '';
    this.password='';
    this.inputsType = [
      {id:1, name: 'Texto', typeI:'text'},
      {id:2, name: 'Correo', typeI:'email'},
      {id:3, name: 'Checkbox', typeI:'checkbox'},
      {id:4, name: 'Numero', typeI:'number'},
      {id:5, name: 'Contraseña', typeI:'password'}
    ]
    this.selectType = 999;
    this.login();
  }

  login = () => {
    this.loginForm = this.formBuild.group({
      email: ['',[Validators.required, Validators.pattern('[^A-Z][^this.]+[^self.]+[a-z]+[0-9a-z-_.]*@[a-z]+[a-z0-9]*.[a-z]{2,3}.*[a-z]{2,3}')]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      telefonos: this.formBuild.array([this.formBuild.group({phone: ['',[Validators.pattern('[^a-z][^A-Z](09)+[0-9]{8}')]]})])
    })
  }

  get Email(){ return this.loginForm.get('email')};
  get Password(){ return this.loginForm.get('password')};

  validartorData = () =>{

    if(this.loginForm.valid){
      this.email = this.loginForm.controls['email'].value;
      this.password = this.loginForm.controls['password'].value;
      this.router.navigate(['/home'])
    }
  }

  get getPhones (){return this.loginForm.get('telefonos') as FormArray};

  select = () =>{
    
  }

  addCamp = () =>{
    console.log('entra al addcamp ' + this.selectType)
    for(let i = 0; i <= this.inputsType.length; i++){
      if(i == this.selectType){
        let type = this.inputsType[this.selectType]
       this.inputType = type['typeI']
        console.log( this.inputType);
      }
    }
     const form = <FormArray>this.loginForm.controls['telefonos'];
    form.push(this.formBuild.group({phone: ['']}));
  } 

  removeCamp = (index: number) =>{
    const form = <FormArray>this.loginForm.controls['telefonos'];
    form.removeAt(index)
  } 



}
