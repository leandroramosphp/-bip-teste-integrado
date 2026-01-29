import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transferencia.component.html'
})
export class TransferenciaComponent {
  dto = {
    origemId: null,
    destinoId: null,
    valor: null
  };

  public transferir(){}
}
