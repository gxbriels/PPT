"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = exports.Resultado = void 0;
var Resultado;
(function (Resultado) {
    Resultado[Resultado["VITORIA_JOGADOR"] = 0] = "VITORIA_JOGADOR";
    Resultado[Resultado["VITORIA_CPU"] = 1] = "VITORIA_CPU";
    Resultado[Resultado["EMPATE"] = 2] = "EMPATE";
})(Resultado = exports.Resultado || (exports.Resultado = {}));
class GameModel {
    constructor(jogadaFactory) {
        this.jogadaFactory = jogadaFactory;
        this.PlacarJogador = 0;
        this.PlacarCPU = 0;
    }
    jogarRodada(jogadaUsuarioTipo) {
        const jogador = this.jogadaFactory.criarJogada(jogadaUsuarioTipo);
        const cpu = this.jogadaFactory.criarJogadaAleatoria();
        this.UltimaJogadaJogador = jogador;
        this.UltimaJogadaCPU = cpu;
        if (jogador.venceDe(cpu)) {
            this.UltimoResultado = Resultado.VITORIA_JOGADOR;
            this.PlacarJogador++;
        }
        else if (cpu.venceDe(jogador)) {
            this.UltimoResultado = Resultado.VITORIA_CPU;
            this.PlacarCPU++;
        }
        else {
            this.UltimoResultado = Resultado.EMPATE;
        }
    }
}
exports.GameModel = GameModel;
