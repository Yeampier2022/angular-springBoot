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
}
