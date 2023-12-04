import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza
    static descricao ='Detentor de lancas e flechas mágicas!'


    constructor(nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if(this.destreza >= 5)  {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}