import { Component } from '@angular/core';
 @Component({
     selector:'app-contador',
     template:`<h2>HOLA MUNDO</h2>
     <h3>la base es :{{base}}</h3>
     <button (click)="acumular(base)">+5</button>
     <span>{{numero}}</span>
     <button (click)="acumular(- base)">-5</button>`,

 })
export class ContadorComponent{
    title = 'bases';
  numero:number =0;
  base:number = 5;
  acumular(valor:number){
    this.numero+=valor;
  }
    
    



}