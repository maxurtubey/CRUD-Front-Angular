export class Estudio
{
    id?:number;
    centro: string;
    titulo: string;
    anio_ingreso: string;
    anio_egreso: string;

    constructor(instituto: string, disciplina: string, ingreso: string, egreso: string){
        this.centro = instituto;
        this.titulo = disciplina;
        this.anio_ingreso = ingreso;
        this.anio_egreso = egreso;
    }
}