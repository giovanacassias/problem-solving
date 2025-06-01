"use strict";
//MESMO PROBLEMA AGORA RESOLVIDO COM MATRIZ DE ADJACÊNCIA
Object.defineProperty(exports, "__esModule", { value: true });
class MatrixA {
    constructor(numNodes) {
        this.matrix = [];
        for (let i = 0; i < numNodes; i++) {
            this.matrix.push(new Array(numNodes).fill(0));
        }
    }
    getMatrix() {
        return this.matrix;
    }
    addEdge(fromNode, toNode) {
        this.matrix[fromNode][toNode] = 1;
        this.matrix[toNode][fromNode] = 1;
    }
    isEdge(fromNode, toNode) {
        return this.matrix[fromNode][toNode];
    }
    getNeighbours(node) {
        let neighbours = [];
        for (let i = 0; i < this.matrix[node].length; i++) {
            if (this.matrix[node][i] === 1) {
                neighbours.push(i);
            }
        }
        return neighbours;
    }
    getNotNeighbours(node) {
        let notNeighbours = [];
        for (let i = 0; i < this.matrix[node].length; i++) {
            if (this.matrix[node][i] === 0) {
                notNeighbours.push(i);
            }
        }
        return notNeighbours;
    }
}
exports.default = MatrixA;
