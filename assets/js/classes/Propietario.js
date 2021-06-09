export class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario() {
        return `nombre : ${this._nombre} dirección : ${this._direccion} teléfono : ${this._telefono}`
    }
}