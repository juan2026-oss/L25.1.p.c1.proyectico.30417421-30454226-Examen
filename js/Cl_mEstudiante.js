export default class Cl_mEstudiante{
    constructor({nombre, cedula, sexo, nota}){
        this._nombre = nombre;
        this._cedula = cedula;
        this._sexo = sexo;
        this._nota = nota;
    }
    get nombre(){
        return this._nombre;
    }
    get cedula(){
        return this._cedula;
    }
    get sexo(){
        return this._sexo;
    }
    get nota(){
        return this._nota;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set cedula(cedula){
        this._cedula = +cedula;
    }
    set sexo(sexo){
        this._sexo = sexo.toupperCase();
    }
    set nota(nota){
        this._nota = +nota;
    }
}