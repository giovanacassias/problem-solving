//LUCAS D. E GIOVANA C.
//MOTIVOS PARA USARMOS MAP() E SET(): é uma outra estrutura que queríamos aprender a usar (ao invés de array que já estamos familiarizados) e porquê Set() já faz o trabalho de não inserir itens repetidos;

export default class Graph {
  private adjacentList: any;

  constructor() {
    this.adjacentList = new Map();
  }

  public addNode(node: string): void {
    this.adjacentList.set(node, new Set());
  }

  public addEdge(node1: string, node2: string): void {
    this.adjacentList.get(node1).add(node2);
    this.adjacentList.get(node2).add(node1);
  }

  public hasEdge(node1: string, node2: string) {
    return this.adjacentList.get(node1).has(node2);
  }

  public getDirectNeighbours(node: string) {
    return this.adjacentList.get(node);
  }

  public getNotNeighbours(node: string): string[] {
    let keys = this.adjacentList.keys(),
      neighbours = this.getAllNeighboursAux(node),
      notNeighbours: string[] = [];

    for (const key of keys) {
      if (!neighbours.has(key) && key != node) {
        notNeighbours.push(key);
      }
    }
    return notNeighbours;
  }

  private getAllNeighboursAux(startNode: string): Set<string> {
    let visited: Set<string> = new Set();
    let dfs = (node: string): void => {
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

  public getAllNeighbours(startNode: string): void {
    let allNeighbours: string[] = Array.from(
      this.getAllNeighboursAux(startNode)
    );
    allNeighbours = allNeighbours.sort().slice(1);

    console.log(`Todos os vizinhos de ${startNode} são: ${allNeighbours}`);
  }
}
