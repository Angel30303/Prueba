const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
]

var orden = ovejas.filter(colores => colores.color == 'rojo')[1];
var orden1 = ovejas.filter(colores => colores.color == 'rojo')[2];

console.log(orden, orden1);