"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const Model_1 = require("./Model");
const types_1 = require("../common/types");
const readline = __importStar(require("readline"));
class GameView {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    exibirResultado(model) {
        var _a, _b;
        console.log(`\nVocê jogou: ${(_a = model.UltimaJogadaJogador) === null || _a === void 0 ? void 0 : _a.tipo}`);
        console.log(`CPU jogou: ${(_b = model.UltimaJogadaCPU) === null || _b === void 0 ? void 0 : _b.tipo}`);
        switch (model.UltimoResultado) {
            case Model_1.Resultado.VITORIA_JOGADOR:
                console.log("Você venceu a rodada!");
                break;
            case Model_1.Resultado.VITORIA_CPU:
                console.log("Você perdeu a rodada!");
                break;
            case Model_1.Resultado.EMPATE:
                console.log("Empatou!");
                break;
        }
        console.log(`--- Placar: Jogador ${model.PlacarJogador} x ${model.PlacarCPU} CPU ---`);
    }
    perguntarJogada(callback) {
        console.log("\nEscolha sua jogada: (1) Pedra, (2) Papel, (3) Tesoura ou (sair)");
        this.rl.question('> ', (input) => {
            const escolha = input.toLowerCase().trim();
            switch (escolha) {
                case '1':
                case 'pedra':
                    callback(types_1.JogadaTipo.PEDRA);
                    break;
                case '2':
                case 'papel':
                    callback(types_1.JogadaTipo.PAPEL);
                    break;
                case '3':
                case 'tesoura':
                    callback(types_1.JogadaTipo.TESOURA);
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
    encerrar() {
        console.log("\nObrigado por jogar!");
        this.rl.close();
    }
}
exports.GameView = GameView;
