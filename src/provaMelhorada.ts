//LUCAS E GIOVANA

export default class DominoDois {
  private startGame: number[] = [];
  constructor(a: number, b: number) {
    if (a === b && (a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
      this.startGame = [a, b];
    }
    console.log(this.startGame);
  }

  public playGame(): void {
    let table: number[] = this.startGame,
      hand: number[],
      cardValidation: boolean = false,
      counter: number = 1;

    console.log(`mesa original ${table}`);
    //console.log(`Peça na mão ${hand}`);

    while (counter != 10) {
      hand = this.newCard();
      console.log(`A peça da rodada ${counter} é ${hand}`);

      while (cardValidation != true) {
        if (!this.checkCard(table, hand)) {
          cardValidation = false;
          console.log(`${hand} não é uma carta válida! Tente outra peça`);
          //hand = this.newCard();
        }
        cardValidation = true;
        //console.log(`A peça ${hand} é válida!`);
      }
      if (hand[1] === table[0]) {
        table.unshift(hand[1]);
        table.unshift(hand[0]);
        console.log(`mesa modificada ${table}`);
      }
      if (hand[0] === table[1]) {
        table.push(hand[0]);
        table.push(hand[1]);
        console.log(`mesa modificada ${table}`);
      } else {
        console.log(`A peça ${hand} não encaixa em nenhum lugar ${table}`);
      }
      counter++;
    }
  }

  public newCard(): number[] {
    let hand: number[] = [],
      a: number = this.randomNumber(),
      b: number = this.randomNumber();

    hand.push(a);
    hand.push(b);
    /* aqui era quando estava recebendo via parâmetros / manualmente
    if ((a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
      return (hand = [
      a, b]);
    }
    */
    return hand;
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 7);
  }

  private checkCard(table: number[], hand: number[]) {
    for (let i = 0; i < table.length; i++) {
      if (table[i] == hand[i] && table[i + 1] == hand[i + 1]) {
        console.log("Essa peça já está na mesa!");
        return false;
      }
      console.log("Essa peça ainda não está na mesa. Você pode usar ela");
      return true;
    }
  }
}
