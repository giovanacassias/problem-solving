"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EXERCÍCIO 3
class AdjacencyList {
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
exports.default = AdjacencyList;
