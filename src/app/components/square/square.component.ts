import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = 'X';
}
