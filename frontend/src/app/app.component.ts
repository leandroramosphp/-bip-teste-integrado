import { Component } from '@angular/core';
import { BeneficioListComponent } from './components/beneficio-list/beneficio-list.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeneficioListComponent, TransferenciaComponent],
  template: `
    <h1>Benefícios</h1>
    <app-beneficio-list></app-beneficio-list>
    <app-transferencia></app-transferencia>
  `
})
export class AppComponent {}
