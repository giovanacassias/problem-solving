"use strict";
//MESMO PROBLEMA AGORA SENDO FEITO COM DUAS CLASSES - UMA PARA O NODE E UMA PARA O GRAPH. EXEMPLO DISPONIBILIZADO NO MOODLE
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.value = value;
        this.neighbours = [];
    }
    addNeighbour(node) {
        this.neighbours.push(node);
    }
}
class Graph {
    constructor() {
        this.nodes = [];
    }
    addNode(value) {
        const node = new Node(value);
        this.nodes.push(node);
    }
    addEdge(source, destination) {
        source.addNeighbour(destination);
        destination.addNeighbour(source);
    }
    getNeighbours(node) {
        let nodeNeighbours = [];
        for (let i = 0; i < node.neighbours.length; i++) {
            nodeNeighbours.push(node.neighbours[i].value);
        }
        return nodeNeighbours;
    }
    getNotNeighbours(node) {
        let notNeighbours = [], neighbours = this.getNeighbours(node), allNodes = this.getNodes();
        for (let i = 0; i < allNodes.length; i++) {
            if (!neighbours.includes(allNodes[i]) && allNodes[i] != node.value) {
                console.log(`${allNodes[i]} não é um vizinho de ${node.value}`);
                notNeighbours.push(allNodes[i]);
            }
        }
        return notNeighbours;
    }
    getNodes() {
        let allNodes = [];
        for (let i = 0; i < this.nodes.length; i++) {
            allNodes.push(this.nodes[i].value);
        }
        return allNodes;
    }
}
exports.default = Graph;
