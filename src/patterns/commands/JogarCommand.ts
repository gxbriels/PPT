import { Command } from "./Command";
import {GameModel} from "../../mvc/Model";
import {JogadaTipo} from "../../common/types";

export class JogarCommand implements Command {
    constructor(
        private model: GameModel,
        private JogadaUsuario: JogadaTipo
    ){}

    execute(): void {
        this.model.jogarRodada(this.JogadaUsuario);
    }
}