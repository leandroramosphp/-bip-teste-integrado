import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficio-list',
  standalone: true,
  templateUrl: './beneficio-list.component.html'
})
export class BeneficioListComponent {
  beneficios = [{
    id:"",
    valor:"",
    nome:""
  }];
}
