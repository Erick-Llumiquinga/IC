import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  status: boolean; 
  registroForm: FormGroup;
  proveedores: any[];
  categorias: any; 
  productos: any[];
  datas: any;
  nuevoProducto: boolean;
  proveedorId: number;
  categoria: string;
  productoId: number;
  elaboracion: string;
  vencimiento: string;
  cantidad: number;
  nombre: string
  statusImg: boolean = true;
  precioUnit: number;

  constructor(private http:HttpClient, private fb:FormBuilder) { }

  ngOnInit() {
    this.proveedorId = 999;   
    this.productoId = 999;                                  
    this.nuevoProducto = false;
    this.status = false;
    this.mostrarDatos()
  }

  mostrarDatos = () => {                                                                                                                   this.http.get<any>(environment.url + '/leer?tabla=proveedores')
  .subscribe(res =>{
    let datos = res.datos
    this.proveedores = datos
    this.status = true;
  })                                      
}

  traerProductos = () =>{
    this.status = true;
    this.http.get<any>(environment.url + `/leerFiltro?tabla=productos&id=${this.proveedorId}`)
    .subscribe(res =>{
      let datos = res.datos
      this.productos = datos
    })
  }

  nuevo = () => {
    this.nuevoProducto = true;
  }

  register = () => {
    this.datas = {
      tabla: 'productos',
      datos:[
        { 
          proveedorid: this.proveedorId,
          categoriaid: this.proveedorId,
          nombre: this.nombre,
          precioUnit: this.precioUnit,
          fechaLab: this.elaboracion,
          fechaVenc: this.vencimiento,
          cantidad: this.cantidad
        }
      ]
    }
    this.http.post<any>(environment.url + `/insertar`, this.datas)
    .subscribe(response=>{
      if(response.ok == true){
        Swal.fire({
          type: 'success',
          title: 'Genial!',
          text: 'Los datos se ingresaron coreectamente'
        })
      }
      else{
        Swal.fire({
          type: 'error',
          title: 'Ups!',
          text: 'No se puedo guardar'
        })
      }
    })
  }



  guardarImg = () => {
    this.statusImg = false;
    let prov = [
    {Img:  btoa('../../assets/img/prov/cocaCola.png')},
    {Img:  btoa('../../assets/img/prov/CoolTea.jpg')},
    {Img:  btoa('../../assets/img/prov/monster.jpg')},
    {Img:  btoa('../../assets/img/prov/orangine.png')},
    {Img:  btoa('../../assets/img/prov/pepsi.png')},
    {Img:  btoa('../../assets/img/prov/redBull.png')},
    {Img:  btoa('../../assets/img/prov/toni.png')},
    {Img:  btoa('../../assets/img/prov/pronaca.jpg')},
    {Img:  btoa('../../assets/img/prov/favorita.png')},
    {Img:  btoa('../../assets/img/prov/real.png')},
    {Img:  btoa('../../assets/img/prov/Nestle.png')},
    {Img:  btoa('../../assets/img/prov/confiteca.png')},
    {Img:  btoa('../../assets/img/prov/pinguino.jpg')},
    {Img:  btoa('../../assets/img/prov/carli.png')},
    {Img:  btoa('../../assets/img/prov/hit.png')},
    {Img:  btoa('../../assets/img/prov/master.png')},
    {Img:  btoa('../../assets/img/prov/mervisa.png')},
    {Img:  btoa('../../assets/img/prov/ozz.png')},
    {Img:  btoa('../../assets/img/prov/norteño.png')},
    {Img:  btoa('../../assets/img/prov/pilsener.png')},
    {Img:  btoa('../../assets/img/prov/switch.png')},
    {Img:  btoa('../../assets/img/prov/piña.png')},
    {Img:  btoa('../../assets/img/prov/pasteurizadora.png')},
    {Img:  btoa('../../assets/img/prov/clean.png')}
    ]

    let cat = [
      {Img:  btoa('../../assets/img/comestibles.png')},
      {Img:  btoa('../../assets/img/bebidas.png')},
      {Img:  btoa('../../assets/img/dulces.png')},
      {Img:  btoa('../../assets/img/lacteos.png')},
      {Img:  btoa('../../assets/img/licores.png')},
      {Img:  btoa('../../assets/img/limpieza.png')},
    ]
    
    let i = 1;
    let number = 1;
    prov.forEach(element=>{
      let data = {
        tabla: 'proveedores',
        datos: [{id: i, img: element.Img}]
      }
      i +=1
      this.http.post(environment.url + '/actualizar', data)
      .subscribe(res =>{
      })
    })
  
    cat.forEach(element=>{
      let data = {
        tabla: 'categorias',
        datos: [{id: number, img: element.Img}]
      }
      number += 1
      this.http.post(environment.url + '/actualizar', data)
      .subscribe(res =>{
      })
    })
  }

}
