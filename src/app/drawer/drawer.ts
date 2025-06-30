import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductSelector} from './product-selector';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drawer',
  imports: [  CommonModule,
    MatButtonModule,
    ProductSelector,
    MatIconModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css'
})
export class Drawer {
    productos: any[] = [];
constructor(private dialog: MatDialog) {}

  agregarProducto() {
    this.dialog.open(ProductSelector, {
      width: '800px',
    }).afterClosed().subscribe(producto => {
      if (producto) {
        const existente= this.productos.find(p=> p.sku === producto.sku);
        if(existente){
          existente.cantidad++;
        } else {
        this.productos.push({...producto, cantidad: 1});

        }
      }
    }); 
  }
cambiarCantidad(p: any, delta: number) {
  const nueva = p.cantidad + delta;
  if (nueva >= 1) {
    p.cantidad = nueva;
  }
}

eliminar(p: any) {
  this.productos = this.productos.filter(item => item !== p);
}
get neto(): number {
  return this.productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
}

get iva(): number {
  return this.neto * 0.19;
}

get total(): number {
  return this.neto + this.iva;
}


}
