import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../model/filme-service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filme.html', // se quiser seguir o padrão Angular, renomeia pra filme.component.html
  styleUrls: ['./filme.css']   // e o CSS pra filme.component.css
})
export class FilmeComponent {
  titulo: string = '';
  tipoConsulta: 't' | 's' = 't';
  resultado: Filme | Filme[] | null = null;
  erro: string = '';

  constructor(private filmeService: FilmeService) {}

  buscar(): void {
    this.erro = '';
    this.resultado = null;

    if (!this.titulo.trim()) {
      this.erro = 'Informe o título do filme.';
      return;
    }

    if (this.tipoConsulta === 't') {
      // Busca um filme específico
      this.filmeService.obterFilme(this.titulo).subscribe({
        next: (data: Filme) => this.resultado = data,
        error: () => this.erro = 'Erro ao buscar o filme.'
      });
    } else {
      // Busca lista de filmes
      this.filmeService.buscarFilmes(this.titulo).subscribe({
        next: (data: Filme[]) => this.resultado = data,
        error: () => this.erro = 'Erro ao buscar lista de filmes.'
      });
    }
  }
}
