"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeJogadas = exports.JogadaClassicaFactory = void 0;
const types_js_1 = require("../../common/types.js");
class Pedra {
    constructor() {
        this.tipo = types_js_1.JogadaTipo.PEDRA;
    }
    venceDe(outra) {
        return outra.tipo === types_js_1.JogadaTipo.TESOURA;
    }
}
class Papel {
    constructor() {
        this.tipo = types_js_1.JogadaTipo.PAPEL;
    }
    venceDe(outra) {
        return outra.tipo === types_js_1.JogadaTipo.PEDRA;
    }
}
class Tesoura {
    constructor() {
        this.tipo = types_js_1.JogadaTipo.TESOURA;
    }
    venceDe(outra) {
        return outra.tipo === types_js_1.JogadaTipo.PAPEL;
    }
}
class JogadaClassicaFactory {
    criarJogada(tipo) {
        switch (tipo) {
            case types_js_1.JogadaTipo.PEDRA: return new Pedra();
            case types_js_1.JogadaTipo.PAPEL: return new Papel();
            case types_js_1.JogadaTipo.TESOURA: return new Tesoura();
            default: throw new Error("Tipo de jogada inválido");
        }
    }
    criarJogadaAleatoria() {
        const jogadas = [types_js_1.JogadaTipo.PEDRA, types_js_1.JogadaTipo.PAPEL, types_js_1.JogadaTipo.TESOURA];
        const indiceAleatorio = Math.floor(Math.random() * jogadas.length);
        return this.criarJogada(jogadas[indiceAleatorio]);
    }
}
exports.JogadaClassicaFactory = JogadaClassicaFactory;
class FabricaDeJogadas {
    static getFactory(tipoFamillia) {
        if (tipoFamillia === 'classica') {
            return new JogadaClassicaFactory();
        }
        throw new Error("Família de jogadas inválida");
    }
}
exports.FabricaDeJogadas = FabricaDeJogadas;
