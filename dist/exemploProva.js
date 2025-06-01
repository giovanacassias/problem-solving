"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacentList = new Map();
    }
    addNode(node) {
        this.adjacentList.set(node, new Set());
    }
    addEdge(node1, node2) {
        this.adjacentList.get(node1).add(node2);
        this.adjacentList.get(node2).add(node1);
    }
    getNeighbours(node) {
        return this.adjacentList.get(node);
    }
    getNotNeighbours(node) {
        let keys = this.adjacentList.keys(), neighbours = this.getNeighbours(node), notNeighbours = [];
        for (const key of keys) {
            if (!neighbours.has(key) && key != node) {
                notNeighbours.push(key);
            }
        }
        return notNeighbours;
    }
    hasEdge(node1, node2) {
        return this.adjacentList.get(node1).has(node2);
    }
}
exports.default = Graph;
