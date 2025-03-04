export default class Cl_vEstudiante {
    constructor() {
        this.vista = document.getElementById('estudianteForm');
        this.Nombre = document.getElementById('estudianteForm_inNombre');
        this.Cedula = document.getElementById('estudianteForm_inCedula');
        this.Sexo = document.getElementById('estudianteForm_inSexo');
        this.Nota = document.getElementById('estudianteForm_inNota');
        this.btConfirmar = document.getElementById('EstudianteForm_btConfirmar');
    }
    get nombre () {
        return this.Nombre.value;
    }
    get cedula () {
        return this.Cedula.value;
    }
    get sexo () {
        return this.Sexo.value;
    }
    get nota () {
        return +this.Nota.value;
    }
    mostrarVistaEstudiante () {
        this.vista.hidden = false;       
    }
    ocualtarVistaEstudiante () {       
        this.vista.hidden = true;       
    }
}