import AdjacencyList2 from "./ex3";
import AdjacencyList from "./exemploProva";

//EX3
/* let g = new AdjacencyList();
console.log(g.addNode("A"));
console.log(g.addNode("B"));
console.log(g.addNode("C"));
console.log(g.addEdge("B", "C"));
console.log(g.hasEdge("A", "B"));
console.log(g.hasEdge("C", "B")); */

//exemploProva.ts
let g = new AdjacencyList();
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
console.log(g.getNotNeighbours("A"));
