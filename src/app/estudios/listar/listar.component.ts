import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/modelo/estudio';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  conocimientos: Estudio[] = [];
  constructor(private estudServ: EstudiosService) {}//, private toastr: ToastrService) {}

  ngOnInit() {
    this.cargarEstudios();
  }

  cargarEstudios(): void{
    this.estudServ.obtenerEstudios().subscribe(
      data => {
        this.conocimientos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any){
    this.estudServ.quitar(id).subscribe(
      data => {
        this.cargarEstudios();
      },
      err => {
      }
    );
  }
}
