import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  productos: any[];
  proveedorId: number;

  constructor(private http:HttpClient) {  }


  ngOnInit() {
    this.traerDatos();
  }

estadistica = () =>{
  let chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.data = this.productos;

  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "cantidad";
  pieSeries.dataFields.category = "nombre";
}

  traerDatos = () =>{
    let id = sessionStorage.getItem('pv');
    this.http.get<any>(environment.url + `/leerFiltro?tabla=productos&id=${id}`)
    .subscribe(res=>{
        let data = res.datos;
        this.productos = data;
        this.estadistica();
    })
  }


}
