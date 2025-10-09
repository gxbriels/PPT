import {GameModel} from "./src/mvc/Model.js";
import {GameView} from "./src/mvc/View.js";
import {GameController} from "./src/mvc/Controller.js";
import {FabricaDeJogadas} from "./src/patterns/factories/JogadaFactory";

// Print Inicial
console.log("=== Bem vindo ao Pedra, Papel e Tesoura!! ===");

const JogadaFactory = FabricaDeJogadas.getFactory('classica');

const model = new GameModel(JogadaFactory);
const view = new GameView();
const controller = new GameController(model, view);

controller.iniciarJogo();