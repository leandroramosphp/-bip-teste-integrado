import { Component } from '@angular/core';
import { BeneficioService } from '../../services/beneficio.service';
import { Transferencia } from '../../models/transferencia.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html'
})
export class TransferenciaComponent {

  dto: Transferencia = {
    origemId: 0,
    destinoId: 0,
    valor: 0
  };

  constructor(private service: BeneficioService) {}

  transferir(): void {
    this.service.transferir(this.dto).subscribe({
      next: () => alert('Transferência realizada'),
      error: err => alert(err.error?.message || 'Erro na transferência')
    });
  }
}
