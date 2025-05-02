"use strict";
//GIOVANA CASSIAS
Object.defineProperty(exports, "__esModule", { value: true });
class TheLastOfUs {
    constructor(numeroInicial, taxaCura) {
        this.numeroInicial = numeroInicial;
        this.taxaCura = taxaCura;
    }
    getNumberOfMissions(numeroAlvo) {
        return this.getNumberOfMissionsAux(numeroAlvo, this.numeroInicial);
    }
    getNumberOfMissionsAux(numeroAlvo, numeroInicial) {
        console.log(numeroInicial);
        if (numeroAlvo < numeroInicial)
            return 0;
        let missions = 0;
        if (numeroInicial < numeroAlvo) {
            numeroInicial = numeroInicial + numeroInicial * this.taxaCura;
            missions++;
        }
        return (missions +
            this.getNumberOfMissionsAux(numeroAlvo - this.numeroInicial, numeroInicial));
    }
}
exports.default = TheLastOfUs;
