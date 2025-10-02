import { GameModel, Resultado } from "./Model";
import { JogadaTipo } from "../common/types";
import * as readline from 'readline';

export class GameView {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    
    public exibirResultado(model: GameModel): void {
        console.log(`\nVocê jogou: ${model.UltimaJogadaJogador?.tipo}`);
        console.log(`CPU jogou: ${model.UltimaJogadaCPU?.tipo}`);

        switch (model.UltimoResultado) {
            case Resultado.VITORIA_JOGADOR:
                console.log("Você venceu a rodada!");
                break;
            case Resultado.VITORIA_CPU:
                console.log("Você perdeu a rodada!");
                break;
            case Resultado.EMPATE:
                console.log("Empatou!");
                break;
        }

        console.log(`--- Placar: Jogador ${model.PlacarJogador} x ${model.PlacarCPU} CPU ---`);
    }

    public perguntarJogada(callback: (jogada: JogadaTipo | null) => void): void {
        console.log("\nEscolha sua jogada: (1) Pedra, (2) Papel, (3) Tesoura ou (sair)");
        this.rl.question('> ', (input) => {
            const escolha = input.toLowerCase().trim();
            switch (escolha) {
                case '1':
                case 'pedra':
                    callback(JogadaTipo.PEDRA);
                    break;
                case '2':
                case 'papel':
                    callback(JogadaTipo.PAPEL);
                    break;
                case '3':
                case 'tesoura':
                    callback(JogadaTipo.TESOURA);
                    break;
                case 'sair':
                    callback(null); // Sinaliza para encerrar
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    this.perguntarJogada(callback); // Pergunta de novo
                    break;
            }
        });
    }

    public encerrar(): void {
        console.log("\nObrigado por jogar!");
        this.rl.close();
    }
}