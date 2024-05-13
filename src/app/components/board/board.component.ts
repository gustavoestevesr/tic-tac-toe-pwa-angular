import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  squares!: any[];
  xIsNext!: boolean;
  winner!: string;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  canMakeMove(idx: number): boolean {
    const noWinner = !this.winner;
    const squareIsEmpty = !this.squares[idx];
    return noWinner && squareIsEmpty;
}

  makeMove(idx: number) {
    if (this.canMakeMove(idx)) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  noOneWonTheGame(): boolean {
    if (this.squares.every((square) => square !== null)) {
      return true;
    }
    return false;
  }

  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }
}
