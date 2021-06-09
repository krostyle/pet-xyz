export class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es : ${this._nombre}. El domicilio es : ${this._direccion}, y el número telefónico de contacto : ${this._telefono}`
    }
}