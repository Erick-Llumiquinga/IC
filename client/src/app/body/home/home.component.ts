import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() proveedor = new EventEmitter();
  img: any = new Image();
  status: boolean
  proveedores: any[];
  categorias: any = [];
  prueba: string
  proveedorId: number;

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
    this.status = false;
    this.cargarCategorias();
  }

  cargarCategorias = () =>{
    this.http.get<any>(environment.url + '/leer?tabla=categorias')
    .subscribe(res=>{
      let cat = []
      let catOrd = []
      let data = res.datos
      let imgB64;
      data.forEach(element => {
        imgB64 = atob(element.img);
        console.log('categorias' + imgB64);
          cat.push(this.img.src = imgB64)
          console.log('entro al if' + element.id)
    })
    
    this.categorias = cat 
    console.log(this.categorias)
  })  
  }
 

  openModal = (id:number) =>{
    this.status = true;

    this.http.get<any>(environment.url + `/leerFiltro?tabla=proveedores&id=${id}`)
    .subscribe(res=>{
      let prov = []
      let data = res.datos
      let imgB64;
      data.forEach(element => {
        imgB64 = atob(element.img);
        console.log('categorias' + imgB64);  
        prov.push(this.img.src = imgB64)
      });
      this.proveedores = prov
      
      console.log(prov)
    })
  }

  closeModal = () =>{
    this.status = false;
  }

  reporteProducto = (id: number) =>{
    this.proveedorId = id;
    this.router.navigate(['/report'])
  }

  enviarId(){
    this.proveedor.emit(this.proveedorId)
  }

}






