import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent {
  producto: Product = new Product();
  id: number;

  constructor(
    private productoServicio: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (data) => {
        this.irALista();
      },
      error: (error) => console.log(error),
    });
  }

  irALista() {
    this.enrutador.navigate(['/productos']);
  }
}
