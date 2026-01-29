import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../../services/beneficio.service';
import { Beneficio } from '../../models/beneficio.model';

@Component({
  selector: 'app-beneficio-list',
  templateUrl: './beneficio-list.component.html'
})
export class BeneficioListComponent implements OnInit {

  beneficios: Beneficio[] = [];

  constructor(private service: BeneficioService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(data => {
      this.beneficios = data;
    });
  }
}
