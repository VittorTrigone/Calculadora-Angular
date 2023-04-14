import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-angular',
  templateUrl: './calculadora-angular.component.html',
  styleUrls: ['./calculadora-angular.component.css']
})
export class CalculadoraAngularComponent {
  contas(op: string): void {
    let num1: number, num2: number, resultado: number = 0;

    num1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    num2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);

    switch (op) {
      case "+":
        resultado = num1 + num2;
        break;

      case "-":
        resultado = num1 - num2;
        break;

      case "/":
        resultado = num1 / num2;
        break;

      case "*":
        resultado = num1 * num2;
        break;
    }

    (<HTMLInputElement>document.getElementById("conta")).value = resultado.toString();
  }
}
