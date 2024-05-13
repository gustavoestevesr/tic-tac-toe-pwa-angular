import { Component } from '@angular/core';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tic-tac-toe-pwa-angular';
}
