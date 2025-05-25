"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prova_1 = __importDefault(require("./prova"));
//EX2
//let teste = new ListaInteiros(5);
//console.log(teste.toString());
//EX3
//let teste2 = new ListaInteiros();
//console.log(teste2.removeLess(10));
//console.log(teste2.removeLessFilter(10));
//EX4
//console.log(teste2.removeMultiples(3));
//EX5
//teste2.maisProximoMedia();
//EX6
//teste2.reduceLength(9);
//EX8
//teste2.amplitude();
//EX10
//teste2.josephus();
//PROVA
let domino = new prova_1.default(1, 6);
console.log(domino.playGame());
