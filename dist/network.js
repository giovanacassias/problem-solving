"use strict";
//LUCAS D. E GIOVANA C.
//Continuamos o algoritmo da atividade "neighbours" que estávamos fazendo com lista de adjacência utilizando Map() e Set(). Optamos por fazer com esse (tínhamos feito também com apenas arrays) porque queríamos aprender a lidar com Map() e nos beneficiar da característica do Set() de guardar valores únicos/sem repetir nativamente. Entretanto, uma desvantagem é que não conseguimos ordenar diretamente o Set() - é necessário converter para Array. Por isso temos as duas estruturas.
Object.defineProperty(exports, "__esModule", { value: true });
//Refletimos e nosso pensamento foi que, para descobrir quem são os vizinhos diretos e não-diretos, precisamos percorrer todos os nós que estão conectados, partindo do nó que queremos saber (no exemplo, A). Pois, se B é vizinho de A e C é vizinho de B, logo C também é vizinho de A (não diretamente, mas C é alcançável via A-B-C). A partir disso, precisamos verificar os vizinhos dos vizinhos: quem é o vizinho de A, no caso o B, e quem é vizinho do B, no caso o C e assim sucessivamente até encontrarmos o último nó conectado. Pesquisando achamos que o algoritmo DFS, de forma recursiva, seria uma boa opção. Então utilizamos/adaptamos o trecho do algoritmo que encontramos em: https://medium.com/@ilimalbayrak/mastering-typescript-exploring-data-structures-and-algorithms-part-ii-1ff0e823e91b
class Network {
    constructor() {
        this.adjacentList = new Map();
    }
    addNode(node) {
        this.adjacentList.set(node, new Set());
    }
    add(node1, node2) {
        this.adjacentList.get(node1).add(node2);
        this.adjacentList.get(node2).add(node1);
    }
    hasEdge(node1, node2) {
        return this.adjacentList.get(node1).has(node2);
    }
    getDirectNeighbours(node) {
        return this.adjacentList.get(node);
    }
    getConnected(startNode) {
        let allNeighbours = Array.from(this.getConnectedAux(startNode));
        allNeighbours = allNeighbours.sort().slice(1); // <-- PROBLEMA
        console.log(`Todos os vizinhos de ${startNode} são: ${allNeighbours}`);
        return allNeighbours;
    }
    getConnectedAux(startNode) {
        let visited = new Set();
        let dfs = (node) => {
            //console.log(visited);
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
    getNotConnected(node) {
        let keys = this.adjacentList.keys(), neighbours = this.getConnectedAux(node), notNeighbours = [];
        for (const key of keys) {
            if (!neighbours.has(key) && key != node) {
                notNeighbours.push(key);
            }
        }
        notNeighbours = notNeighbours.sort();
        console.log(`Todos os NÃO vizinhos de ${node} são: ${notNeighbours}`);
        return notNeighbours;
    }
}
exports.default = Network;
