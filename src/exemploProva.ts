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

  public getNeighbours(node: string) {
    return this.adjacentList.get(node);
  }

  public getNotNeighbours(node: string) {
    let keys = this.adjacentList.keys(),
      neighbours = this.getNeighbours(node),
      notNeighbours: number[] = [];

    for (const key of keys) {
      if (!neighbours.has(key) && key != node) {
        notNeighbours.push(key);
      }
    }
    return notNeighbours;
  }

  public hasEdge(node1: string, node2: string) {
    return this.adjacentList.get(node1).has(node2);
  }
}
