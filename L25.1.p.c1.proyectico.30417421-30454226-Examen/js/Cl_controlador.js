export default class Cl_controlador {
    constructor(modelo, vista) {        
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarEstudiante() {
        this.modelo.procesarEstudiante(this.vista.agregarEstudiante());
        this.vista.reportarEstudiante(
            this.modelo.porcenAprobados(), 
            this.modelo.mejorEstudiante(), 
            this.modelo.porcenChicasAprob()
        );
    
    }
}