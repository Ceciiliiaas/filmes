import { Component } from '@angular/core';
import { Filme } from './filme/filme'; // importa o componente (sem 'Component')

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Filme], // adiciona o componente aqui
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'filmes';
}

