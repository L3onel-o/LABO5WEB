const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

const nombre = 'Fran Quesada';
const escuela = 'Fictizia';

const profesor = { nombre, escuela }

const string = 'mi string'
// Como ya vimos esto no lo puedo hacer
// string = 'otra cosa diferente' // Error: no se puede reasignar una constante

// Los objetos mutan, así que puedo modificar su contenido libremente
const objeto = {
    propiedad1: 'Esta es mi propiedad original'
}

objeto.propiedad2 = 'Esta es una propiedad nueva'
objeto.propiedad1 = 'Esta propiedad la modifico'

// Lo que no puedo hacer es lo siguiente:
const peligro = {
    propiedad1: 'Esta es mi propiedad original'
}

// peligro = {
//     prohibido: 'Esto no lo puedo hacer'
// } // Error: no se puede reasignar una constante

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const heroesDc = heroes.dc

// Ejemplo de destructuring
const heroes2 = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const { dc: heroesDC } = heroes2

const dc = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
}

const { heroes: { batman } } = dc

const objeto = {
    nombre: 'Fran Quesada',
    edad: 26,
}

// Devuelve el mismo objeto
const objetoCongelado = Object.freeze(objeto)
objetoCongelado.localidad = 'Madrid'

// Pero si podemos crear nuevas copias a partir del objeto congelado
const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
}


const estanteria = {
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false
    },
    {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
    },
    {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
    },
    {
        nombre: 'Ilada',
        autor: 'Homero',
        leido: false
    }],
    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
${prefijo} leído ${libro.nombre} de ${libro.autor}`;
        }
        console.log(resultado);
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
        const elementoRandom = librosNoLeidos[indiceRandom];
        console.log(`Te sugiero "${elementoRandom.nombre}" de ${elementoRandom.autor}`);
    }
};

// Para probar los métodos:
estanteria.log();
estanteria.sugerencia();