import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  
  docPDF: jsPDF;
  altoTotal: number;
  anchoTotal: number;
  y: number;
  margenInf: number;
  margenDer: number;
  x: number;
  altoParrafo: number;
  textSize: number;
  interlineado: number;
  anchoUso: number;
  altoUso: number;  
  textoArray: string[];      
  constructor() { }

  ngOnInit() {
    this.altoTotal = 290;
    this.anchoTotal = 210;
    this.y = 25;
    this.margenInf = 25;
    this.margenDer = 25;
    this.x = 25;
    this.textSize = 18;
    this.interlineado = 1;
    this.anchoUso = this.anchoTotal - this.x - this.margenDer;
    this.altoUso = this.altoTotal - this.y - this.x;
    this.textoArray = [
      'The 14 standard fonts in PDF are limited to the ASCII-codepage. If you want to use UTF-8 you have to to integrate a custom font, which provides the needed glyphs. jsPDF supports .ttf-files. So if you want to have for example chinese text in your pdf, your font has to have the necessary chinese glyphs. So check if your font supports the wanted glyphs or else it will show a blank space instead of the text.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      'The 14 standard fonts in PDF are limited to the ASCII-codepage. If you want to use UTF-8 you have to to integrate a custom font, which provides the needed glyphs. jsPDF supports .ttf-files. So if you want to have for example chinese text in your pdf, your font has to have the necessary chinese glyphs. So check if your font supports the wanted glyphs or else it will show a blank space instead of the text.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      'The 14 standard fonts in PDF are limited to the ASCII-codepage. If you want to use UTF-8 you have to to integrate a custom font, which provides the needed glyphs. jsPDF supports .ttf-files. So if you want to have for example chinese text in your pdf, your font has to have the necessary chinese glyphs. So check if your font supports the wanted glyphs or else it will show a blank space instead of the text.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      'The 14 standard fonts in PDF are limited to the ASCII-codepage. If you want to use UTF-8 you have to to integrate a custom font, which provides the needed glyphs. jsPDF supports .ttf-files. So if you want to have for example chinese text in your pdf, your font has to have the necessary chinese glyphs. So check if your font supports the wanted glyphs or else it will show a blank space instead of the text.',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    
    ]
  }

  plantilla = (doc:jsPDF,empresa:string,ruc:string,slogan:string,urlLogo: string, direccion: string,telefono: string, mail:string)=>{
    // Emcabezado
    let imgMarca = new Image();
    imgMarca.src = '../../../../assets/img/top.png'
    
    let logo = new Image();
    logo.src = urlLogo;
    doc.addImage(logo,15,10,40,20)
    doc.setFontSize(18);
    doc.setFontType('bold')
    this.y = 10
    let dim = doc.getTextDimensions(empresa)
    let xCenter = (220 - dim.w)/2;
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(empresa,xCenter, this.y)
    this.y += this.altoParrafo;
    xCenter = (240 - dim.w)/2;
    this.textSize = 10
    doc.setFontSize(this.textSize);
    doc.setFontType('normal');
    dim = doc.getTextDimensions(ruc)
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(ruc,xCenter,this.y)
    this.y += this.altoParrafo
    dim = doc.getTextDimensions(slogan)
    xCenter = (220 - dim.w)/2;
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(slogan,xCenter,this.y)
    this.y += this.altoParrafo

    // Marca de Agua
    //imgMarca.style.opacity = '0.5';
    doc.addImage(imgMarca,30,95)

    //Pie de pagina
    this.y = 270
    xCenter = 160
    dim = doc.getTextDimensions(direccion)
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(direccion,xCenter,this.y)
    this.y += this.altoParrafo
    dim = doc.getTextDimensions(telefono)
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(telefono,xCenter,this.y)
    this.y += this.altoParrafo
    dim = doc.getTextDimensions(mail)
    this.altoParrafo = Math.ceil(dim.h)+(this.textSize * 0.3515) * this.interlineado
    doc.text(mail,xCenter,this.y)
    this.y += this.altoParrafo
    
  }

  documentoPDF = (columns: number ) =>{
    this.docPDF = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUseFonts: true
    })

    this.plantilla(this.docPDF,'THC Corporation','1750057729001','¡Los limites existen en tu mente!','../../../assets/img/thc.png','Parque de la Psycho','0979328888','thcCorportaion@thc.com');
    this.y = 50;
    this.textoArray.forEach(element=>{  
      let lineas = this.docPDF.splitTextToSize(element,160);
      let dim = this.docPDF.getTextDimensions(lineas);
      this.altoParrafo = Math.ceil(dim.h) + (this.textSize * 0.3515) * this.interlineado;

      if(this.y < this.altoUso){
        if(columns === 1){
          /*this.docPDF.text(lineas,this.x,this.y);
          this.y += this.altoParrafo*/ 
          if((this.y + this.altoParrafo) < this.altoUso){
            this.docPDF.text(lineas,this.x,this.y)
            this.y += this.altoParrafo
          }
          else{
            this.docPDF.addPage();
            this.plantilla(this.docPDF,'THC Corporation','1750057729001','¡Los limites existen en tu mente!','../../../assets/img/thc.png','Parque de la Psycho','0979328888','thcCorportaion@thc.com');
            this.y = 50;
          }
        }
        else{
          lineas = this.docPDF.splitTextToSize(element,(160/columns)); 
          if(this.x == (this.anchoUso/columns)+30 && (this.y + this.altoParrafo) > this.altoUso){
            this.docPDF.addPage();
            this.plantilla(this.docPDF,'THC Corporation','1750057729001','¡Los limites existen en tu mente!','../../../assets/img/thc.png','Parque de la Psycho','0979328888','thcCorportaion@thc.com');
            this.y = 50;
            this.x = 25;
            //this.docPDF.text(lineas,this.x,this.y)
            let m = this.y += this.altoParrafo
            console.log(`3 ${m}`)
          }
          else{
            if((this.y + this.altoParrafo) < this.altoUso){
              this.docPDF.text(lineas,this.x,this.y);
              let m = this.y += this.altoParrafo
              console.log(`1 ${m}`)
            }
            else{
              this.y = 50
              this.x = (this.anchoUso/columns)+30;
              //this.docPDF.text(lineas,this.x,this.y)
              let m =this.y += this.altoParrafo
              console.log(`2 ${m}`)
            }
          }
        }
      }
    })
  this.docPDF.save('Document')
  }
}
    

