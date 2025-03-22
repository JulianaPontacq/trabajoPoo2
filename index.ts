/*Se debe crear una clase Celular que represente un teléfono móvil.
Requisitos:
- Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
- Constructor con parámetros opcionales y obligatorios:
Obligatorios: Marca, modelo y sistema operativo.
Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
- Métodos adicionales:
encenderApagar(): Cambia el estado de encendido/apagado del celular.
mostrarInfo(): Retorna una cadena con los datos del celular.*/

import { Celular } from "./celular";

let primerCelular = new Celular ("Samsung", "S21", "Android", 4, 64, false );
let segundoCelular = new Celular ("Motorola", "G24", "Android", 4, 64,false);
let tercerCelular = new Celular ("Xiaomi", "14C", "Android", 4, 64, false);
let cuartoCelular = new Celular ("TCL", "403 Rio", "Android", 4, 64, false);


console.log (primerCelular.mostrarInfo());