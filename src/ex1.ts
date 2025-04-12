//EXERCÍCIO 1 - MENSAGEM
//Implemente um método que exiba n vezes uma mensagem na tela

export default class Message {
  public showMessage(n: number): void {
    if (n == 0) {
      return;
    }
    console.log("Hello");
    return this.showMessage(n - 1);
  }
}
