import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  nombreProveedor: string
  nombreProductos: any = []
  
  ngOnInit() {
    this.traerDatos()
  }

  traerDatos = () =>{
    this.http.get<any>(environment.url + `/leer?tabla=productos`)
    .subscribe(respo=>{
      let data = respo.datos;
      data.forEach(element => {
        if(element.cantidad < 15){
          this.nombreProductos.push(element)
        }
        else{
          this.nombreProveedor = 'Wow! aun tienes Productos'
        }
      });
    })
  }


}
