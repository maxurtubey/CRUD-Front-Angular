
import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/servicios/estudios.service';
import { Estudio } from 'src/app/modelo/estudio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  centro: string;
  titulo: string;
  anio_ingreso: string;
  anio_egreso: string;

  constructor(private estudiosService: EstudiosService, private ruteo: Router) { }

  ngOnInit() {
  }

  onCreate(): void {
    const educacion = new Estudio(this.centro, this.titulo, this.anio_ingreso, this.anio_egreso);
    this.estudiosService.guardar(educacion).subscribe(
      data => {
        this.ruteo.navigate(['/']);
      },
      err => {
        this.ruteo.navigate(['/']);
      }
    );
  }

}