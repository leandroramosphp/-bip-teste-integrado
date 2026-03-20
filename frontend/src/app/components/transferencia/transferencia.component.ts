import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-transferencia',
  standalone: true,
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
  imports: [
    CommonModule,
    FormsModule, // 👈 OBRIGATÓRIO
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class TransferenciaComponent {

  dto = {
    origemId: null as number | null,
    destinoId: null as number | null,
    valor: null as number | null
  };

  loading = false;

  transferir() {
    if (!this.dto.origemId || !this.dto.destinoId || !this.dto.valor) {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.dto.valor <= 0) {
      alert('Valor inválido!');
      return;
    }

    this.loading = true;

    console.log('Enviando:', this.dto);

    setTimeout(() => {
      this.loading = false;
      alert('Transferência realizada com sucesso! 💰');

      this.dto = {
        origemId: null,
        destinoId: null,
        valor: null
      };
    }, 1000);
  }
}
