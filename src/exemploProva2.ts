//MESMO PROBLEMA FEITO COM LISTA DE ADJACÊNCIA E ARRAY

export default class AdjacentListArray {
  private list: { [key: string]: string[] };

  public constructor() {
    this.list = {};
  }

  public addNode(node: string): void {
    this.list[node] = [];
  }

  public addEdge(fromNode: string, toNode: string) {
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
  }

  public isEdge(fromNode: string, toNode: string) {
    return this.list[fromNode].includes(toNode);
  }

  public getNeighbours(node: string) {
    return this.list[node];
  }

  public getNotNeighbours(node: string) {
    let neighbours = this.getNeighbours(node),
      notNeighbours: string[] = [],
      nodes = this.list;

    for (const key of Object.keys(nodes)) {
      // You can now use 'key' as the node name
      if (!neighbours.includes(key) && key != node) {
        notNeighbours.push(key);
      }
    }
    return notNeighbours;
  }
}
