"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex2_1 = __importDefault(require("./ex2"));
//EX2
let teste = new ex2_1.default(5);
//console.log(teste.toString());
//EX3
let teste2 = new ex2_1.default(10);
//console.log(teste2.removeLess(10));
//console.log(teste2.removeLessFilter(10));
//EX4
console.log(teste2.removeMultiples(3));
