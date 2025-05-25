//LUCAS E GIOVANA

export default class Domino {
  private startGame: number[] = [];

  constructor(a: number, b: number) {
    if (a === b && (a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
      /*             this.startGame.push(a);
            this.startGame.push(b); */
      this.startGame = [a, b];
    }
    console.log(this.startGame);
  }

  public playGame(): void {
    let table: number[] = this.startGame,
      hand: number[] = this.newCard(),
      counter: number = 0;

    console.log(`mesa original ${table}`);

    while (counter != 27) {
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
        console.log("Peça inválida!");
      }
      counter++;
      hand = this.newCard();
    }
  }

  public newCard(): number[] {
    let hand: number[] = [],
      a: number = this.randomNumber(),
      b: number = this.randomNumber();

    if ((a >= 0 || a <= 6) && (b >= 0 || b <= 6)) {
      return (hand = [a, b]);
    }
    return hand;
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 7);
  }
}
