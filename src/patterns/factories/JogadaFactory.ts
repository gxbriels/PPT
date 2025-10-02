import { Jogada, JogadaTipo } from "../../common/types.js";

class Pedra implements Jogada {
    tipo = JogadaTipo.PEDRA;
    
    venceDe(outra: Jogada): boolean {
        return outra.tipo === JogadaTipo.TESOURA;
    }
}

class Papel implements Jogada {
    tipo = JogadaTipo.PAPEL;
    
    venceDe(outra: Jogada): boolean {
        return outra.tipo === JogadaTipo.PEDRA;
    }
}

class Tesoura implements Jogada {
    tipo = JogadaTipo.TESOURA;
    
    venceDe(outra: Jogada): boolean {
        return outra.tipo === JogadaTipo.PAPEL;
    }
}

export interface IJogadaFactory {
    criarJogada(tipo: JogadaTipo): Jogada;
    criarJogadaAleatoria(): Jogada;
}

export class JogadaClassicaFactory implements IJogadaFactory{

    criarJogada(tipo: JogadaTipo): Jogada {
        switch(tipo) {
            case JogadaTipo.PEDRA: return new Pedra();
            case JogadaTipo.PAPEL: return new Papel();
            case JogadaTipo.TESOURA: return new Tesoura();
            default: throw new Error("Tipo de jogada inválido");
        }
    }

    criarJogadaAleatoria(): Jogada {
        const jogadas = [JogadaTipo.PEDRA, JogadaTipo.PAPEL, JogadaTipo.TESOURA];
        const indiceAleatorio = Math.floor(Math.random() * jogadas.length);
        return this.criarJogada(jogadas[indiceAleatorio]);
    }
}

export abstract class FabricaDeJogadas {
    static getFactory(tipoFamillia: 'classica'): IJogadaFactory {
        if (tipoFamillia === 'classica') {
            return new JogadaClassicaFactory();
        }
        throw new Error("Família de jogadas inválida");
    }
}