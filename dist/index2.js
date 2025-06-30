"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const network_1 = __importDefault(require("./network"));
//EX3
/* let g = new AdjacencyList();
console.log(g.addNode("A"));
console.log(g.addNode("B"));
console.log(g.addNode("C"));
console.log(g.addEdge("B", "C"));
console.log(g.hasEdge("A", "B"));
console.log(g.hasEdge("C", "B")); */
//exemploProva.ts
/* let g = new AdjacencyList();
//console.log(g);
console.log(g.addNode("A"));
console.log(g.addNode("B"));
console.log(g.addNode("C"));
console.log(g.addNode("D"));
console.log(g.addNode("E"));
console.log(g.addNode("F"));
console.log(g.addEdge("A", "B"));
console.log(g.addEdge("A", "C"));
console.log(g.addEdge("C", "B"));
console.log(g.addEdge("D", "E"));
console.log(g.addEdge("D", "F"));
console.log(g.addEdge("F", "B"));
//console.log(g);
console.log(g.getNeighbours("A"));
console.log(g.getNotNeighbours("A")); */
//exemploProva2.ts
/* let gg = new AdjacentListArray();
console.log(gg);
console.log(gg.addNode("A"));
console.log(gg.addNode("B"));
console.log(gg.addNode("C"));
console.log(gg.addNode("D"));
console.log(gg.addNode("E"));
console.log(gg.addNode("F"));
console.log(gg.addNode("G"));
console.log(gg.addEdge("A", "B"));
console.log(gg.addEdge("A", "D"));
console.log(gg.addEdge("A", "G"));
console.log(gg);
console.log(gg.isEdge("A", "B"));
console.log(gg.isEdge("A", "C"));
console.log(gg.getNeighbours("A"));
console.log(gg.getNotNeighbours("A"));
 */
//exemploProva3
//let graph = new Graph();
/* console.log(graph.addNode("A"));
console.log(graph.addNode("B"));
console.log(graph.addNode("C"));
console.log(graph.addNode("D"));
console.log(graph.addNode("E"));
console.log(graph.addNode("F"));
console.log(graph);
console.log(graph.addEdge(graph.nodes[0], graph.nodes[1]));
console.log(graph.addEdge(graph.nodes[0], graph.nodes[2]));
console.log(graph.addEdge(graph.nodes[0], graph.nodes[5]));
console.log(graph.getNodes());
console.log(graph.getNeighbours(graph.nodes[0]));
console.log(graph.getNotNeighbours(graph.nodes[0])); */
//exemploProva4
/* let matrix = new MatrixA(5);
console.log(matrix);
console.log(matrix.addEdge(0, 1));
console.log(matrix.addEdge(0, 2));
console.log(matrix.addEdge(0, 3));
console.log(matrix.getMatrix());
console.log(matrix.isEdge(0, 1));
console.log(matrix.isEdge(1, 2));
console.log(matrix.getNeighbours(0));
console.log(matrix.getNotNeighbours(0));
 */
/* let myMap = new Graph();
console.log(myMap);
console.log(myMap.addNode("A"));
console.log(myMap.addNode("B"));
console.log(myMap.addNode("C"));
console.log(myMap.addNode("D"));
console.log(myMap.addNode("E"));
console.log(myMap.addNode("F"));
console.log(myMap.addNode("G"));
console.log(myMap.addEdge("A", "B"));
console.log(myMap.addEdge("A", "D"));
console.log(myMap.addEdge("A", "G"));
console.log(myMap.getNeighbours("A"));
 */
//exemploProva.ts DFS
/* let gg = new Graph();
console.log(gg);
console.log(gg.addNode("A"));
console.log(gg.addNode("B"));
console.log(gg.addNode("C"));
console.log(gg.addNode("D"));
console.log(gg.addNode("E"));
console.log(gg.addNode("F"));
console.log(gg.addNode("G"));
console.log(gg.addNode("H"));
console.log(gg.addNode("I"));
console.log(gg.addEdge("A", "B"));
console.log(gg.addEdge("A", "C"));
console.log(gg.addEdge("C", "D"));
console.log(gg.addEdge("E", "F"));
console.log(gg.addEdge("E", "G"));
console.log(gg.addEdge("H", "I"));
console.log(gg.getAllNeighbours("A"));
 */
/* console.log(gg);
console.log(gg.addNode("A"));
console.log(gg.addNode("B"));
console.log(gg.addNode("C"));
console.log(gg.addNode("D"));
console.log(gg.addNode("E"));
console.log(gg.addNode("F"));
console.log(gg.addNode("G"));
console.log(gg.addNode("H"));
console.log(gg.addNode("I"));
console.log(gg.addNode("K"));
console.log(gg.addNode("M"));
console.log(gg.addNode("N"));
console.log(gg.addNode("O"));
console.log(gg.addNode("Z"));
console.log(gg.addEdge("A", "B"));
console.log(gg.addEdge("A", "C"));
console.log(gg.addEdge("C", "D"));
console.log(gg.addEdge("B", "D"));
console.log(gg.addEdge("D", "K"));
console.log(gg.addEdge("K", "M"));
console.log(gg.addEdge("M", "N"));
console.log(gg.addEdge("M", "O"));
console.log(gg.addEdge("B", "Z"));
console.log(gg.addEdge("E", "G"));
console.log(gg.addEdge("E", "F"));
console.log(gg.addEdge("H", "I"));
console.log(gg.getAllNeighbours("A"));
console.log(gg.getNotNeighbours("A")); */
let network = new network_1.default();
console.log(network);
console.log(network.addNode("B"));
console.log(network.addNode("C"));
console.log(network.addNode("A"));
console.log(network.addNode("D"));
console.log(network.addNode("E"));
console.log(network.addNode("F"));
console.log(network.addNode("G"));
console.log(network.addNode("H"));
console.log(network.addNode("I"));
console.log(network.addNode("K"));
console.log(network.addNode("M"));
console.log(network.addNode("N"));
console.log(network.addNode("O"));
console.log(network.addNode("Z"));
console.log(network.add("A", "B"));
console.log(network.add("A", "C"));
console.log(network.add("C", "D"));
console.log(network.add("B", "D"));
console.log(network.add("D", "K"));
console.log(network.add("K", "M"));
console.log(network.add("M", "N"));
console.log(network.add("M", "O"));
console.log(network.add("B", "Z"));
console.log(network.add("E", "G"));
console.log(network.add("E", "F"));
console.log(network.add("H", "I"));
console.log(network.getConnected("A"));
console.log(network.getNotConnected("A"));
/* import Network from "./network";

console.clear();

let network = new Network();

//como seguimos o princípio da responsabilidade única, temos um método para adicionar os nós e outro para adicionar uma ligação entre os nós

//incluído
network.addNode("a");
network.addNode("b");
network.addNode("c");
//incluído

network.add("a", "b");
network.add("a", "c");

console.log();
console.log("Teste 1"); // OK
console.log(network.getConnected("a"));
console.log(">> [b, c]");

console.log();
console.log("Teste 2"); // OK
console.log(network.getNotConnected("a"));
console.log(">> [ ]");

//incluído
network.addNode("d");
network.addNode("e");
//incluído

network.add("e", "d");

console.log();
console.log("Teste 3"); //OK
console.log(network.getNotConnected("a"));
console.log(">> [d, e]");

console.log();
console.log("Teste 4"); //OK
console.log(network.getConnected("d"));
console.log(">> [e]");

//incluído
network.addNode("f");
network.addNode("g");
network.addNode("h");
//incluído

network.add("f", "g");
network.add("g", "h");

console.log();
console.log("Teste 5"); //OK
console.log(network.getConnected("f"));
console.log(">> [g, h]");

console.log();
console.log("Teste 6"); //OK
console.log(network.getNotConnected("f"));
console.log(">> [a, b, c, d, e]");

network.add("e", "a");

console.log();
console.log("Teste 7"); //NO
console.log(network.getConnected("c"));
console.log(">> [a, b, d, e]");

network.add("d", "h");

console.log();
console.log("Teste 8"); //NO
console.log(network.getConnected("g"));
console.log(">> [a, b, c, d, e, f, h]");

/* import Network from "./network";

let network = new Network();
console.log(network);
console.log(network.addNode("B"));
console.log(network.addNode("C"));
console.log(network.addNode("A"));
console.log(network.addNode("D"));
console.log(network.addNode("E"));
console.log(network.addNode("F"));
console.log(network.addNode("G"));
console.log(network.addNode("H"));
console.log(network.addNode("I"));
console.log(network.addNode("K"));
console.log(network.addNode("M"));
console.log(network.addNode("N"));
console.log(network.addNode("O"));
console.log(network.addNode("Z"));
console.log(network.add("A", "B"));
console.log(network.add("A", "C"));
console.log(network.add("C", "D"));
console.log(network.add("B", "D"));
console.log(network.add("D", "K"));
console.log(network.add("K", "M"));
console.log(network.add("M", "N"));
console.log(network.add("M", "O"));
console.log(network.add("B", "Z"));
console.log(network.add("E", "G"));
console.log(network.add("E", "F"));
console.log(network.add("H", "I"));
console.log(network.getConnected("A"));
console.log(network.getNotConnected("A")); */
