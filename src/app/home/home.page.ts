import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = '';

  calculate(op: 'sum' | 'sub' | 'times' | 'div') { //No es muy recomendable meter las 4 operaciones, mejor seria hacer un metodo para cada una
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    if (op === 'sum') {
      this.result = a + b;
      this.operation = 'Suma';

    } else if (op === 'sub') {
      this.result = a - b;
      this.operation = 'Resta';

    } else if (op === 'times') {
      this.result = a * b;
      this.operation = 'Multiplicación';

    } else if (op === 'div') {
      if (b === 0) {
        this.result = null;
        this.operation = 'No se puede dividir entre cero';
      } else {
        this.result = a / b;
        this.operation = 'División';
      }

    } else {
      this.result = null;
      this.operation = 'Operación desconocida';
    }
  } 
  calculateTrig(op: 'sin' | 'cos' | 'tan') {
    const angle = Number(this.num1);

    if (isNaN(angle)) {
      this.result = null;
      this.operation = 'Error: valor inválido';
      return;
    }

    
    const angleInRadians = angle * (Math.PI / 180); //debo convertir a radianes antes de hacer la operacion porque sin, cos y tan trabajan en radianes

    switch(op) {
      case 'sin':
        this.result = Math.sin(angleInRadians);
        this.operation = 'Seno';
        break;
      case 'cos':
        this.result = Math.cos(angleInRadians);
        this.operation = 'Coseno';
        break;
      case 'tan':
        this.result = Math.tan(angleInRadians);
        this.operation = 'Tangente';
        break;
    }
  }
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}


