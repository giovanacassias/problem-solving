//MESMO PROBLEMA AGORA SENDO FEITO COM DUAS CLASSES - UMA PARA O NODE E UMA PARA O GRAPH. EXEMPLO DISPONIBILIZADO NO MOODLE

class Node {
  value: any;
  neighbours: Node[];

  constructor(value: any) {
    this.value = value;
    this.neighbours = [];
  }

  public addNeighbour(node: Node) {
    this.neighbours.push(node);
  }
}

export default class Graph {
  public nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  public addNode(value: any) {
    const node = new Node(value);
    this.nodes.push(node);
  }

  public addEdge(source: Node, destination: Node) {
    source.addNeighbour(destination);
    destination.addNeighbour(source);
  }

  public getNeighbours(node: Node): Node[] {
    let nodeNeighbours: any[] = [];
    for (let i = 0; i < node.neighbours.length; i++) {
      nodeNeighbours.push(node.neighbours[i].value);
    }
    return nodeNeighbours;
  }

  public getNotNeighbours(node: Node) {
    let notNeighbours: any[] = [],
      neighbours = this.getNeighbours(node),
      allNodes = this.getNodes();

    for (let i = 0; i < allNodes.length; i++) {
      if (!neighbours.includes(allNodes[i]) && allNodes[i] != node.value) {
        console.log(`${allNodes[i]} não é um vizinho de ${node.value}`);
        notNeighbours.push(allNodes[i]);
      }
    }
    return notNeighbours;
  }

  public getNodes() {
    let allNodes = [];

    for (let i = 0; i < this.nodes.length; i++) {
      allNodes.push(this.nodes[i].value);
    }

    return allNodes;
  }
}
