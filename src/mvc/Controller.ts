import { GameModel } from "./Model";
import { GameView } from "./View";
import { JogarCommand } from "../patterns/commands/JogarCommand";

export class GameController{
    constructor(private model: GameModel, private view: GameView) {}
        
    public iniciarJogo(): void {
        this.proximaRodada();
    }

    private proximaRodada(): void{
        this.view.perguntarJogada((jogada) => {
            if (jogada == null){
                this.view.encerrar();
                return;
            }

            const comando = new JogarCommand(this.model, jogada);
            comando.execute();

            this.view.exibirResultado(this.model);

            this.proximaRodada();
        })
    }
}