import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/modelo/estudio';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  educac: Estudio;

  constructor(
    private estudServ: EstudiosService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    //const id = this.activatedRoute.snapshot.params.id;
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudServ.detalle(id).subscribe(
      data => {
        this.educac = data;
      },
      err => {
        // this.toastr.error(err.error.mensaje, 'Fail', {
        //   timeOut: 3000, positionClass: 'toast-top-center',
        // });
        this.router.navigate(['/']);
      }
    );
  }
  
  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params.id;
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudServ.editar(id, this.educac).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
}