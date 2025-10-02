export enum JogadaTipo {
    PEDRA = 'pedra',
    PAPEL = 'papel',
    TESOURA = 'tesoura'
}

export interface Jogada{
    tipo: JogadaTipo;
    venceDe(outra: Jogada): boolean;
}