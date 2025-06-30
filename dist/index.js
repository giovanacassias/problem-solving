"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maratonaSpiders_1 = __importDefault(require("./maratonaSpiders"));
let teste = new maratonaSpiders_1.default();
//console.log(teste.newGame(3));
console.log(teste.merlinWins(3));
