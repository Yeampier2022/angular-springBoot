import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
})
export class ProductoListComponent {
  productos: Product[];

  constructor(private productoService: ProductoService,
    private router: Router
    ) {

  }


  ngOnInit() {
    // cargamos los productos
    this.obtenerProductos()

  }

  editarProductor(id: number) {
    this.router.navigate(['editar-producto', id]);
  }

  private obtenerProductos() {
    this.productoService.obtenerProductosLista().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(
      {
        next: (response) => {
          this.obtenerProductos();
        },
        error: (error) => {
          console.log(error);
        },
      }
    )


  }

}
