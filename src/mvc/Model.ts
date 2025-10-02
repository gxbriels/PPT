import { Jogada, JogadaTipo } from "../common/types";
import { IJogadaFactory } from "../patterns/factories/JogadaFactory";

export enum Resultado {
    VITORIA_JOGADOR,
    VITORIA_CPU, 
    EMPATE
}

export class GameModel {
    public PlacarJogador: number = 0;
    public PlacarCPU: number = 0;
    public UltimaJogadaJogador?: Jogada;
    public UltimaJogadaCPU?: Jogada;
    public UltimoResultado?: Resultado;
    
    constructor(private jogadaFactory: IJogadaFactory) {}

    jogarRodada(jogadaUsuarioTipo: JogadaTipo): void {
        const jogador = this.jogadaFactory.criarJogada(jogadaUsuarioTipo);
        const cpu = this.jogadaFactory.criarJogadaAleatoria();

        this.UltimaJogadaJogador = jogador;
        this.UltimaJogadaCPU = cpu;

        if (jogador.venceDe(cpu)) {
            this.UltimoResultado = Resultado.VITORIA_JOGADOR;
            this.PlacarJogador++;
        } else if (cpu.venceDe(jogador)) {
            this.UltimoResultado = Resultado.VITORIA_CPU;
            this.PlacarCPU++;
        } else {
            this.UltimoResultado = Resultado.EMPATE;
        }
    }
}