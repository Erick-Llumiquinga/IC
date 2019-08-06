import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  proveedorId: number;
  nombre: string;
  fechaFact: string;
  cantidad: number;
  productoId: number;
  total: number;
  proveedores: any[];
  productos: any[];
  iva: number;
  datos: any = [];
  cantidadTotal: number;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.traerProveedores();
    this.iva = 0.12;
    this.total = 0;
    this.proveedorId = 999;   
    this.productoId = 999;  
  }

  traerProveedores = () =>{
    this.http.get<any>(environment.url + '/leer?tabla=proveedores')
    .subscribe(res => {
      this.proveedores = res.datos
    })
  }

  traerProductos  = () =>{
    this.http.get<any>(environment.url + `/leerFiltro?tabla=productos&id=${this.proveedorId}`)
    .subscribe(res => {
      this.productos = res.datos
    })
  } 


  agrgarProducto = () => {
    let data = {
      productoid: this.productoId,
      fechaFact: this.fechaFact,
      cantidadProductos: this.cantidad,
    }
    this.total += this.cantidad * this.productos['precioUnit'];
    this.datos.push(data)
    this.proveedorId = 999;   
    this.productoId = 999;  
    this.proveedorId = 0;
    this.fechaFact = '';
    this.cantidad = 0;
  }

  guardarDatos = () =>{
    this.total *= this.iva


    let data = {
      tabla: 'ventas',
      datos: this.datos
    }

    this.http.post(environment.url + '/insertar', data)
    .subscribe(res=>{
      console.log(res)
    })
  }
}
