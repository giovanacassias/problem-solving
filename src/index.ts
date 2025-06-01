import AdjacencyList2 from "./ex3";
import AdjacencyList from "./exemploProva";
import AdjacentListArray from "./exemploProva2";
import Graph from "./exemploProva3";
import MatrixA from "./exemploProva4";

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
console.log(gg.getNotNeighbours("A")); */

//exemploProva3
/* let graph = new Graph();
console.log(graph.addNode("A"));
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
let matrix = new MatrixA(5);
console.log(matrix);
console.log(matrix.addEdge(0, 1));
console.log(matrix.addEdge(0, 2));
console.log(matrix.addEdge(0, 3));
console.log(matrix.getMatrix());
console.log(matrix.isEdge(0, 1));
console.log(matrix.isEdge(1, 2));
console.log(matrix.getNeighbours(0));
console.log(matrix.getNotNeighbours(0));
