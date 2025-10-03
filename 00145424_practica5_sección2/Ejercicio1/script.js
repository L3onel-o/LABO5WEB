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
string = 'otra cosa diferente'

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

peligro = {
    prohibido: 'Esto no lo puedo hacer'
}

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const heroesDc = heroes.dc

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const { dc: heroesDC } = heroes

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
