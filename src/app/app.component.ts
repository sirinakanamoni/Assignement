import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question3Component } from './question3/question3.component';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [CommonModule, RouterOutlet,Question1Component,Question3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment';
}
