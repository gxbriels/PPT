"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const JogarCommand_1 = require("../patterns/commands/JogarCommand");
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    iniciarJogo() {
        this.proximaRodada();
    }
    proximaRodada() {
        this.view.perguntarJogada((jogada) => {
            if (jogada == null) {
                this.view.encerrar();
                return;
            }
            const comando = new JogarCommand_1.JogarCommand(this.model, jogada);
            comando.execute();
            this.view.exibirResultado(this.model);
            this.proximaRodada();
        });
    }
}
exports.GameController = GameController;
