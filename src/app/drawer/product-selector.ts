import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductDialog } from './product-dialog';

@Component({
  selector: 'app-product-selector',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './product-selector.html',
  styleUrls: ['./product-selector.css']
})
export class ProductSelector {
  filtro = '';
  displayedColumns = ['sku', 'nombre', 'descripcion', 'precio', 'marca'];

  productos = [
    { sku: 'ACEITE30', nombre: 'Lubricante', descripcion: 'Aceite 5w30', precio: 21000, marca: 'Genérico' },
    { sku: 'GOL1001', nombre: 'Gollas', descripcion: 'Gollas tapón carter', precio: 6000, marca: 'Genérico' },
    { sku: 'FILTRO001', nombre: 'Filtro aceite', descripcion: 'Filtro 5w', precio: 21000, marca: 'Genérico' },
    { sku: 'BAT', nombre: 'BATERIA ISTOP', descripcion: 'BATERIA CON ISTOP', precio: 91000, marca: 'Genérico' },
  ];

  constructor(
    private dialogRef: MatDialogRef<ProductSelector>,
    private dialog: MatDialog 
  ) {}

  get productosFiltrados() {
    const filtro = this.filtro.trim().toLowerCase();
    return this.productos.filter(p =>
      p.sku.toLowerCase().includes(filtro) || p.descripcion.toLowerCase().includes(filtro)
    );
  }

  seleccionar(producto: any) {
    this.dialogRef.close(producto);
  }

  cancelar() {
    this.dialogRef.close(null);
  }

  abrirDialogoProducto() {
    this.dialog.open(ProductDialog, {
      width: '600px'
    }).afterClosed().subscribe(result => {
      if (result) {
        // Integrar el nuevo producto en la tabla o gestionarlo
        this.productos.push(result); // opcional
      }
    });
  }
}
