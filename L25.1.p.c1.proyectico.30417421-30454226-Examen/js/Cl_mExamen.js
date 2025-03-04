export default class Cl_mExamen{
    constructor(){
        this.cantEstudiantes = 0;
        this.contEstudAprob = 0;
        this.mayorNota = 0;
        this.auxNombre = '';
        this.contChicas = 0;
        this.contChicasAprob = 0;
    }
    procesarEstudiante(estudiante){
        this.cantEstudiantes++;
        if(estudiante.nota > 9.6){
            this.contEstudAprob++;
        }
        if(estudiante.nota > this.mayorNota){
            this.mayorNota = estudiante.nota;
            this.auxNombre = estudiante.nombre;
        }
        if(estudiante.sexo == 'F'){
            this.contChicas++;
            if(estudiante.nota > 9.6){
                this.contChicasAprob++;
            }
        }
    }
    porcenAprobados(){
        return (this.contEstudAprob / this.cantEstudiantes) * 100;
    }
    mejorEstudiante(){
        return this.auxNombre;
    }
    porcenChicasAprob(){
        return (this.contChicasAprob / this.contChicas) * 100;
    }
}