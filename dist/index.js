"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_1 = __importDefault(require("./ex1"));
//EX1
let inteiros1 = new ex1_1.default(2, 4, 6);
console.log(inteiros1.ordenar());
let inteiros2 = new ex1_1.default(2, 6, 4);
console.log(inteiros2.ordenar());
let inteiros3 = new ex1_1.default(4, 2, 6);
console.log(inteiros3.ordenar());
let inteiros4 = new ex1_1.default(4, 6, 2);
console.log(inteiros4.ordenar());
let inteiros5 = new ex1_1.default(6, 2, 4);
console.log(inteiros5.ordenar());
let inteiros6 = new ex1_1.default(6, 4, 2);
console.log(inteiros6.ordenar());
let inteiros7 = new ex1_1.default(2, 2, 1);
console.log(inteiros7.ordenar());
