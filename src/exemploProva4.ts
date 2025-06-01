//MESMO PROBLEMA AGORA RESOLVIDO COM MATRIZ DE ADJACÊNCIA

export default class MatrixA {
  private matrix: number[][] = [];

  constructor(numNodes: number) {
    for (let i = 0; i < numNodes; i++) {
      this.matrix.push(new Array(numNodes).fill(0));
    }
  }

  public getMatrix() {
    return this.matrix;
  }

  public addEdge(fromNode: number, toNode: number) {
    this.matrix[fromNode][toNode] = 1;
    this.matrix[toNode][fromNode] = 1;
  }

  public isEdge(fromNode: number, toNode: number) {
    return this.matrix[fromNode][toNode];
  }

  public getNeighbours(node: number) {
    let neighbours: number[] = [];

    for (let i = 0; i < this.matrix[node].length; i++) {
      if (this.matrix[node][i] === 1) {
        neighbours.push(i);
      }
    }
    return neighbours;
  }

  public getNotNeighbours(node: number) {
    let notNeighbours: number[] = [];

    for (let i = 0; i < this.matrix[node].length; i++) {
      if (this.matrix[node][i] === 0) {
        notNeighbours.push(i);
      }
    }
    return notNeighbours;
  }
}
