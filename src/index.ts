import Inteiros from "./ex1";
import Baralho from "./ex3";
import Crescente from "./ex4";

//EX1

//ordenar()

/* let inteiros1 = new Inteiros(2, 4, 6);
console.log(inteiros1.ordenar());

let inteiros2 = new Inteiros(2, 6, 4);
console.log(inteiros2.ordenar());

let inteiros3 = new Inteiros(4, 2, 6);
console.log(inteiros3.ordenar());

let inteiros4 = new Inteiros(4, 6, 2);
console.log(inteiros4.ordenar());

let inteiros5 = new Inteiros(6, 2, 4);
console.log(inteiros5.ordenar());

let inteiros6 = new Inteiros(6, 4, 2);
console.log(inteiros6.ordenar());

let inteiros7 = new Inteiros(2, 2, 1);
console.log(inteiros7.ordenar()); */

//maior()

/* let maior1 = new Inteiros(1, 5, 33);
console.log(maior1.maior()); */

//EX2

//bubbleSort()
/* let bubble1 = new Baralho([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(bubble1.bubbleSort());

let bubble2 = new Baralho([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(bubble2.bubbleSort());

let bubble3 = new Baralho([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
console.log(bubble3.bubbleSort()); */

//selectionSort()
/* let sort1 = new Baralho([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(sort1.selectionSort());

let sort2 = new Baralho([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(sort2.selectionSort());

let sort3 = new Baralho([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
console.log(sort3.selectionSort()); */

//insertionSort()
/* let insertion1 = new Baralho([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(insertion1.insertionSort());

let insertion2 = new Baralho([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(insertion2.insertionSort());

let insertion3 = new Baralho([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
console.log(insertion3.insertionSort()); */

//EX4
/* let crescente1 = new Crescente();
console.log(crescente1);
 */
/* let crescente2 = new Crescente([
  1, 4, 5, 12, 17, 22, 29, 33, 35, 40, 45, 50, 56, 60, 68, 72, 75, 84, 90, 91,
]);
console.log(crescente2.isOrdenado()); */

//EX5
let bubbleMelhorado1 = new Crescente([
  1, 5, 2, 3, 17, 22, 29, 33, 35, 40, 45, 50, 56, 60, 68, 72, 75, 84, 90, 91,
]);
console.log(bubbleMelhorado1.bubbleMelhorado());
