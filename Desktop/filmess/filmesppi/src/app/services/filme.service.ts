import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Filme {
  Title: string;
  Year: string;
  Director: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  Genre: string;
  Runtime: string;
  Actors: string;
  imdbRating: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiKey = 'ab8fa38e';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  buscarFilme(titulo: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${encodeURIComponent(titulo)}`;

    console.log(' URL da API:', url);

    return this.http.get<any>(url).pipe(
      tap(resultado => {
        console.log(' Resposta da API:', resultado);
      })
    );
  }
}
