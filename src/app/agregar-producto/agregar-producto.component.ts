import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
})
export class AgregarProductoComponent {
  producto: Product = new Product();
  constructor(
    private productoService: ProductoService,
    private enrutador: Router
  ) {}

  onSubmit() {
    this.guadarProducto();
  }

  guadarProducto() {
    this.productoService.agregarPrducto(this.producto).subscribe(
      {
        next: (product) => {
          console.log(product);
          this.enrutador.navigate(['/productos']);
        },
        error: (err: any) => {
          console.log(err);
        },
      }
    )
  }

  // irListaProducto()
}
