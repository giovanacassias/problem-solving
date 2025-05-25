//EXERCÍCIO 3
export default class AdjacencyList {
  private adjacencyList;

  constructor() {
    this.adjacencyList = new Map();
    console.log("New adjacency list succesfully created");
  }

  public addNode(node: any) {
    this.adjacencyList.set(node, new Set());
    console.log(
      `New node: ${node} created and associated with an empty set of neighboors`
    );
  }

  public addEdge(node1: any, node2: any): void {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  public getNeighboors(node: any): void {
    return this.adjacencyList.get(node);
  }

  public hasEdge(node1: any, node2: any) {
    return this.adjacencyList.get(node1).has(node2);
  }
}

class Graph {
  private list: { [key: string]: string[] };

  constructor() {
    this.list = {};
  }

  addNode(node: string): void {
    if (!this.list[node]) {
      this.list[node] = [];
    }
  }

  //não verifica se os nodes já possuem uma relação
  addEdge(fromNode: string, toNode: string): void {
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
  }

  removeEdge(fromNode: string, toNode: string): void {
    this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
    this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
  }

  isEdge(fromNode: string, toNode: string): boolean {
    return this.list[fromNode].includes(toNode);
  }

  printGraph(): void {
    for (const node in this.list) {
      console.log(`${node} -> ${this.list[node].join(", ")}`);
    }
  }
}
