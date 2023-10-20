import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBAse = 'http://localhost:8080/inventario-app/productos';

  constructor(private http: HttpClient) {}

  obtenerProductosLista(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBAse);
  }

  agregarPrducto(product: Product): Observable<Object> {
    return this.http.post(this.urlBAse, product);
  }

  obtenerProductoPorId(id: Number) {
    return this.http.get<Product>(`${this.urlBAse}/${id}`);
  }

  editarProducto(id: number, producto: Product): Observable<Object> {
    return this.http.put(`${this.urlBAse}/${id}`, producto);

  }
  eliminarProducto(id: number): Observable<Object> {
    return this.http.delete(`${this.urlBAse}/${id}`);
  }
}
