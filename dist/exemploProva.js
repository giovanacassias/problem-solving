"use strict";
//LUCAS D. E GIOVANA C.
//MOTIVOS PARA USARMOS MAP() E SET(): é uma outra estrutura que queríamos aprender a usar (ao invés de array que já estamos familiarizados) e porquê Set() já faz o trabalho de não inserir itens repetidos;
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
    hasEdge(node1, node2) {
        return this.adjacentList.get(node1).has(node2);
    }
    getDirectNeighbours(node) {
        return this.adjacentList.get(node);
    }
    getNotNeighbours(node) {
        let keys = this.adjacentList.keys(), neighbours = this.getAllNeighboursAux(node), notNeighbours = [];
        for (const key of keys) {
            if (!neighbours.has(key) && key != node) {
                notNeighbours.push(key);
            }
        }
        return notNeighbours;
    }
    getAllNeighboursAux(startNode) {
        let visited = new Set();
        let dfs = (node) => {
            visited.add(node);
            let neighbours = this.adjacentList.get(node);
            for (const neighbour of neighbours) {
                if (!visited.has(neighbour)) {
                    dfs(neighbour);
                }
            }
        };
        dfs(startNode);
        return visited;
    }
    getAllNeighbours(startNode) {
        let allNeighbours = Array.from(this.getAllNeighboursAux(startNode));
        allNeighbours = allNeighbours.sort().slice(1);
        console.log(`Todos os vizinhos de ${startNode} são: ${allNeighbours}`);
    }
}
exports.default = Graph;
