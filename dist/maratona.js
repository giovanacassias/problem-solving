"use strict";
/* Brute

By Eliton Machado, UDESC BR Brazil
Timelimit: 1

Bruno, interested in learning English, decided to enroll at BRUTE (Brazilian University of Theorical English)
and in the first semester he faced the following role in the MDI (English Mathematics) class:

Let the function be f:N→N, which receives x and returns the number of characters of the value written in full.

For example:
    f(5)=len(FIVE)=4
f(100)=len(ONE HUNDRED)=11

MDI teacher Kaqui proposed the following exercise for Bruno:
Given an integer x, the result of the first iteration in the function f, using x, is f(x)
, of the second iteration f(f(x)), of the third is and f(f(f(x))
and so on. What is the result of the 1000th iteration?

The input consists of a line with a single integer x
1≤x≤100

Output

Help Bruno solve the exercise, what is the result of the 1000th iteration?
Input Sample 	Output Sample
4                     4 */
Object.defineProperty(exports, "__esModule", { value: true });
class Maratona3 {
    constructor() {
        //fs = require("fs");
        // Lê a entrada inteira como string
        //input = fs.readFileSync("/dev/stdin", "utf8");
        // Divide por linhas ou espaços conforme necessário
        //x = parseInt(input.trim());
        this.numberName = {
            1: "ONE",
            2: "TWO",
            3: "THREE",
            4: "FOUR",
            5: "FIVE",
            6: "SIX",
            7: "SEVEN",
            8: "EIGHT",
            9: "NINE",
            10: "TEN",
            11: "ELEVEN",
            12: "TWELVE",
            13: "THIRTEEN",
            14: "FOURTEEN",
            15: "FIFTEEN",
            16: "SIXTEEN",
            17: "SEVENTEEN",
            18: "EIGHTEEN",
            19: "NINETEEN",
            20: "TWENTY",
            30: "THIRTY",
            40: "FORTY",
            50: "FIFTY",
            60: "SIXTY",
            70: "SEVENTY",
            80: "EIGHTY",
            90: "NINETY",
            100: "ONE HUNDRED",
        };
    }
    len(n) {
        let result = "";
        if (n < 1 && n > 100) {
            result = "número inválido. Tente novamente!";
            return result;
        }
        if (n === 100) {
            result = this.numberName[100];
        }
        else {
            if (n > 0 && n < 20) {
                result = this.numberName[n];
            }
            else {
                const tens = Math.floor(n / 10) * 10;
                const units = n % 10;
                if (units != 0) {
                    result = this.numberName[tens] + " " + this.numberName[units];
                }
                else {
                    result = this.numberName[tens];
                }
            }
        }
        console.log(result.length);
        return result;
    }
    f(x, counter) {
        if (counter == 11) {
            return this.len(x).length;
        }
        console.log(`x vale ${x}`);
        this.f(this.len(x).length, counter + 1);
    }
}
exports.default = Maratona3;
