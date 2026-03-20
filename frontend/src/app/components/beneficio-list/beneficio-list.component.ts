import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-beneficio-list',
  standalone: true,
  templateUrl: './beneficio-list.component.html',
  styleUrls: ['./beneficio-list.component.scss'], // opcional
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class BeneficioListComponent {
  beneficios = [
    {
      id: 1,
      nome: 'Plano Saúde',
      valor: 500
    }
  ];
}
