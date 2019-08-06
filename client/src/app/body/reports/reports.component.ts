import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private http:HttpClient) { }


  ngOnInit() {
    
    this.traerDatos();
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.data = [{
      "producto": "Lithuania",
      "vendidos": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  }

  public recibirId (event){

    //this.proveedorId = event
  }

  traerDatos = () =>{
    this.proveedorId = 1;
    this.http.get<any>(environment.url + `/leerFiltro?tabla=productos&id=${this.proveedorId}`)
    .subscribe(res=>{
        let data = res.datos;
        this.productos = data;
        console.log('id del proveedor' + this.proveedorId)
    })

  }


}
