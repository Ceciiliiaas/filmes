import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme'; 

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private http = inject(HttpClient);
  private apiKey = '92a515e'; 
  private baseUrl = 'https://www.omdbapi.com/'; 
  obterFilme(titulo: string): Observable<Filme> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=${encodeURIComponent(titulo)}`;
    return this.http.get<Filme>(url);
  }

  buscarFilmes(titulo: string): Observable<any> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(titulo)}`;
    return this.http.get<any>(url);
  }
}