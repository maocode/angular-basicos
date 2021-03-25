import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

})
export class HeroeComponent{
    nombre:string="Iron Man";
    edad:number=45;

    get MayusculaNombre(){
        return this.nombre.toUpperCase();
    }
    
    ObtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;

    }
    CambiarNombre():void{
        this.nombre="Spyderman";

    }
    CambiarEdad():void{
        this.edad=25;
    }

}