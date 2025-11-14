import { Component } from '@angular/core';
import { FilmesComponent } from './flines/filmes.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FilmesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'filmesppi';
}
