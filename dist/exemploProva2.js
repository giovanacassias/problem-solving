"use strict";
//MESMO PROBLEMA FEITO COM LISTA DE ADJACÊNCIA E ARRAY
Object.defineProperty(exports, "__esModule", { value: true });
class AdjacentListArray {
    constructor() {
        this.list = {};
    }
    addNode(node) {
        this.list[node] = [];
    }
    addEdge(fromNode, toNode) {
        this.list[fromNode].push(toNode);
        this.list[toNode].push(fromNode);
    }
    isEdge(fromNode, toNode) {
        return this.list[fromNode].includes(toNode);
    }
    getNeighbours(node) {
        return this.list[node];
    }
    getNotNeighbours(node) {
        let neighbours = this.getNeighbours(node), notNeighbours = [], nodes = this.list;
        for (const key of Object.keys(nodes)) {
            // You can now use 'key' as the node name
            if (!neighbours.includes(key) && key != node) {
                notNeighbours.push(key);
            }
        }
        return notNeighbours;
    }
}
exports.default = AdjacentListArray;
