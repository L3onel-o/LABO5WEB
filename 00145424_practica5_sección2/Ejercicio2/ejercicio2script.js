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

const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
}
