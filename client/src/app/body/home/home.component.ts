import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img: any = new Image();
  status: boolean
  proveedores: any[];
  categorias: any = [];
  prueba: string
  proveedorId: number;
  data: any[];
  dataCat: any[];

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
    this.status = false;
    this.cargarCategorias();
  }

  cargarCategorias = () =>{
    this.http.get<any>(environment.url + '/leer?tabla=categorias')
    .subscribe(res=>{
      let cat = []
      this.dataCat = res.datos
      let imgB64;
      this.dataCat.forEach(element => {
        imgB64 = atob(element.img);
          cat.push(this.img.src = imgB64)
    })
    this.categorias = cat 
    console.log(this.categorias)
    console.log(this.dataCat)
  })  
  }
 

  openModal = (index:number) =>{
    console.log(this.dataCat[index].id)
    this.status = true;
    this.http.get<any>(environment.url + `/leerFiltroCat?tabla=proveedores&id=${this.dataCat[index].id}`)
    .subscribe(res=>{
      let prov = []
      this.data = res.datos
      let imgB64;
      this.data.forEach(element => {
        imgB64 = atob(element.img);
        prov.push(this.img.src = imgB64)
      });
      this.proveedores = prov
    })
  }

  closeModal = () =>{
    this.status = false;
  }

  reporteProducto = (index) =>{
    let dato = this.data[index].id
    sessionStorage.setItem('pv', dato)
    this.router.navigate(['/report']);
  }



}






