import AdjacencyList from "./ex3";

//EX3
let g = new AdjacencyList();
console.log(g.addNode("A"));
console.log(g.addNode("B"));
console.log(g.addNode("C"));
console.log(g.addEdge("B", "C"));
console.log(g.hasEdge("A", "B"));
console.log(g.hasEdge("C", "B"));
