"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogarCommand = void 0;
class JogarCommand {
    constructor(model, JogadaUsuario) {
        this.model = model;
        this.JogadaUsuario = JogadaUsuario;
    }
    execute() {
        this.model.jogarRodada(this.JogadaUsuario);
    }
}
exports.JogarCommand = JogarCommand;
