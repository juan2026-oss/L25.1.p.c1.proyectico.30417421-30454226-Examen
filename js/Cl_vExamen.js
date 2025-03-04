import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
export default class Cl_vExamen {
    constructor() {
        this.controlador = null;
        this.mEstudiante = null;
        this.vEstudiante = new Cl_vEstudiante();
        this.vista = document.getElementById('mainForm');
        this.tabla = document.getElementById('mainForm_tabla');
        this.btAgregar = document.getElementById('mainForm_btAgregarEstudiante');
        this.reqPorcenAprobados = document.getElementById('mainForm_reqPorcenAprobados');
        this.reqMejorEstudiante = document.getElementById('mainForm_reqMejorEstudiante');
        this.reqPorcenChicasAprob = document.getElementById('mainForm_reqPorcenChicasAprob');
        this.btAgregar.onclick = () => this.ocultarVistaExamen();
        this.vEstudiante.btConfirmar.onclick = () => {
            this.controlador.agregarEstudiante();
            document.getElementById('estudianteForm').querySelectorAll("input").forEach(
            (input) => {input.value = ""}
            );
        };
        this.mostarVistaExamen();   
    }
    agregarEstudiante() {
        this.mEstudiante = new Cl_mEstudiante({
            nombre: this.vEstudiante.nombre,
            cedula: this.vEstudiante.cedula,
            sexo: this.vEstudiante.sexo,
            nota: this.vEstudiante.nota
        });
        this.mostarVistaExamen();
        return this.mEstudiante;
    }
    mostarVistaExamen() {
        this.vista.hidden = false;
        this.vEstudiante.ocualtarVistaEstudiante();
    }
    ocultarVistaExamen() {
        this.vista.hidden = true;
        this.vEstudiante.mostrarVistaEstudiante();
    }
    reportarEstudiante(porcenAprobados, mejorEstudiante, porcenChicasAprob) {
        this.tabla.innerHTML += `
        <tr>
            <td>${this.mEstudiante.nombre}</td>
            <td>${this.mEstudiante.cedula}</td>
            <td>${this.mEstudiante.sexo}</td>
            <td>${this.mEstudiante.nota}</td>
        </tr>`;
        this.reqPorcenAprobados.innerHTML = porcenAprobados;
        this.reqMejorEstudiante.innerHTML = mejorEstudiante;
        this.reqPorcenChicasAprob.innerHTML = porcenChicasAprob;
    }
}

