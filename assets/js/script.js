import { Animal, Mascota, Propietario } from './classes/index.js'

const propietario = document.getElementById('propietario');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const nombreMascota = document.getElementById('nombreMascota');
const tipo = document.getElementById('tipo');
const enfermedad = document.getElementById('enfermedad');
const btn = document.getElementById('btn')
const result = document.getElementById('resultado');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let propietario1 = new Propietario(propietario.value, telefono.value, direccion.value);
    let animal = new Animal(propietario1._nombre, propietario1._telefono, propietario1._direccion, tipo.value)
    let objMascota = new Mascota(animal._nombre, animal._telefono, animal._direccion, animal.tipo, enfermedad.value)
    createData(objMascota);
    cleanForm();
})



const cleanForm = () => {
    propietario.value = '';
    telefono.value = '';
    direccion.value = '';
    nombreMascota.value = '';
    enfermedad.value = '';
};

const createData = (objMascota) => {
    const mascota = objMascota;
    console.log(mascota);
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    li1.appendChild(document.createTextNode(`${mascota.datosPropietario()}`))
    li2.appendChild(document.createTextNode(`${mascota.tipo}, mientras que el nombre de la mascota es : ${mascota.nombreMascota} y la enfermedad es : ${mascota.enfermedad}`))
    ul.appendChild(li1)
    ul.appendChild(li2)
    result.appendChild(ul);
}