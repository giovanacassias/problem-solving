"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EXERCÍCIO 3
class AdjacencyList2 {
    constructor() {
        this.adjacencyList = new Map();
        console.log("New adjacency list succesfully created");
    }
    addNode(node) {
        this.adjacencyList.set(node, new Set());
        console.log(`New node: ${node} created and associated with an empty set of neighboors`);
    }
    addEdge(node1, node2) {
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1);
    }
    getNeighboors(node) {
        return this.adjacencyList.get(node);
    }
    hasEdge(node1, node2) {
        return this.adjacencyList.get(node1).has(node2);
    }
}
exports.default = AdjacencyList2;
class Graph {
    constructor() {
        this.list = {};
    }
    addNode(node) {
        if (!this.list[node]) {
            this.list[node] = [];
        }
    }
    //não verifica se os nodes já possuem uma relação
    addEdge(fromNode, toNode) {
        this.list[fromNode].push(toNode);
        this.list[toNode].push(fromNode);
    }
    removeEdge(fromNode, toNode) {
        this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
        this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
    }
    isEdge(fromNode, toNode) {
        return this.list[fromNode].includes(toNode);
    }
    printGraph() {
        for (const node in this.list) {
            console.log(`${node} -> ${this.list[node].join(", ")}`);
        }
    }
}
class IncidenceMatrix {
    constructor(numVertices, numEdges) {
        this.numVertices = numVertices;
        this.numEdges = numEdges;
        this.currentEdge = 0;
        // Cria a matriz preenchida com 0
        this.matrix = Array.from({ length: numVertices }, () => Array(numEdges).fill(0));
    }
    addEdge(from, to) {
        if (this.currentEdge >= this.numEdges) {
            console.log("Número máximo de arestas atingido.");
            return;
        }
        this.matrix[from][this.currentEdge] = 1;
        this.matrix[to][this.currentEdge] = 1;
        this.currentEdge++;
    }
    showMatrix() {
        console.log("Matriz de Incidência:");
        for (let i = 0; i < this.numVertices; i++) {
            console.log(this.matrix[i].join(" "));
        }
    }
}
