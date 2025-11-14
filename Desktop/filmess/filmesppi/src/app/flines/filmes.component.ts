import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flines.component.html',
  styleUrls: ['./flines.component.css']
})
export class FilmesComponent {
  tituloBusca: string = '';
  filme: any = null; // 
  carregando: boolean = false;
  erro: string = '';

  constructor(private filmeService: FilmeService) {}

  buscarFilme() {
    if (!this.tituloBusca.trim()) return;

    this.carregando = true;
    this.erro = '';
    this.filme = null;

    this.filmeService.buscarFilme(this.tituloBusca).subscribe({
      next: (resultado) => {
        this.carregando = false;
        if (resultado.Response === 'True') {
          this.filme = resultado;
        } else {
          this.erro = 'Filme não encontrado!';
        }
      },
      error: (erro) => {
        this.carregando = false;
        this.erro = 'Erro ao buscar filme. Tente novamente.';
        console.error('Erro API:', erro);
      }
    });
  }

  onInputChange() {
    if (this.tituloBusca.length > 2) {
      setTimeout(() => {
        this.buscarFilme();
      }, 500);
    }
  }
}
