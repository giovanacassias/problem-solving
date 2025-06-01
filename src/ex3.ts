//EXERCÍCIO 3
export default class AdjacencyList2 {
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

class IncidenceMatrix {
  private matrix: number[][];
  private numVertices: number;
  private numEdges: number;
  private currentEdge: number;

  constructor(numVertices: number, numEdges: number) {
    this.numVertices = numVertices;
    this.numEdges = numEdges;
    this.currentEdge = 0;

    // Cria a matriz preenchida com 0
    this.matrix = Array.from({ length: numVertices }, () =>
      Array(numEdges).fill(0)
    );
  }

  addEdge(from: number, to: number): void {
    if (this.currentEdge >= this.numEdges) {
      console.log("Número máximo de arestas atingido.");
      return;
    }

    this.matrix[from][this.currentEdge] = 1;
    this.matrix[to][this.currentEdge] = 1;
    this.currentEdge++;
  }

  showMatrix(): void {
    console.log("Matriz de Incidência:");
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.matrix[i].join(" "));
    }
  }
}
