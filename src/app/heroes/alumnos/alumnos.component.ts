import { Component} from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  
})
export class AlumnosComponent {
  alumnos:string[]=['Julian Rodriguez','Pedro Pardo','Andres Ruiz','Mario Duarte','Alfonzo Muñoz','Diego Ruiz'];
   alumno:string='';
  EliminaAlumnos(){
    const alumno=this.alumnos.shift();
    console.log("Eliminando..." + alumno);
  }
  AgregarAlumno(){
    const nombre=this.alumnos.unshift('Mauricio Calderon');
  }
  }


