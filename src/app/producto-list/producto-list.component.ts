import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
})
export class ProductoListComponent {
  productos: Product[];

  constructor(private productoService: ProductoService) {

  }


  ngOnInit() {
    // cargamos los productos
    this.obtenerProductos()

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

}
