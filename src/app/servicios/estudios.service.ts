import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from '../modelo/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  
  constructor(private http: HttpClient) {} // El servicio se conectará con el backend

  estudiosURL = "http://localhost:8080/estudios/" //esta url es la del backend (Spring Boot)

  public detalle(id: number): Observable<Estudio>{
    return this.http.get<Estudio>(this.estudiosURL + `detalle/${id}`);
  }

  public guardar(educacion: Estudio): Observable<any>{  //ver el ': Observable<any>'
    return this.http.post<any>(this.estudiosURL + 'agregar', educacion);
  }

  public obtenerEstudios(): Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.estudiosURL + 'lista');
  }

  public editar(id: number, estud: Estudio): Observable<any>{
    return this.http.put<any>(this.estudiosURL + `editar/${id}`, estud);
  }

  public quitar(id: any): Observable<any>{
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.estudiosURL + `borrar/${id}`);
  }

}