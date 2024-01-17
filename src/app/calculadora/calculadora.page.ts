import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalculadoraPage implements OnInit {

  number1 = 0;
  number2 = 0;
  number3 = 0;
  
  nota1 = 0;
  nota2 = 0;
  nota3 = 0;

  porcentaje1 = 0;
  porcentaje2 = 0;
  porcentaje3 = 0;
  

  constructor(private route: ActivatedRoute) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
  
  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.nota1 = parseFloat(params['num1']);
      this.nota1 = parseFloat(params['num1']);
      this.nota1 = parseFloat(params['num1']);
      this.porcentaje1 = parseFloat(params['num2']);
      this.realizarOperaciones();
    });
  }
  realizarOperaciones() {/*
    this.multiplicacion = this.numero1 * this.numero2;
    this.division = this.numero1 / this.numero2;
    this.resta = this.numero1 - this.numero2;
    this.suma = this.numero1 + this.numero2;
    */
  }

}
