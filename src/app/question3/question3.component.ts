import { Component } from '@angular/core';

@Component({
  selector: 'app-question3',
  standalone: true,
  imports: [],
  templateUrl: './question3.component.html',
  styleUrl: './question3.component.css'
})
export class Question3Component {
  //Question4
  numbers: number[] = [10, 40, 3, 1];
  sortnumbers() {
    this.numbers.sort((a, b) => a - b);
  
  }
//Question3

  myset: Set<string> = new Set(['siri', 'lucky']);
  Students: string[];
  constructor() {
    this.Students = Array.from(this.myset)
  }

//Question5
  fruits: string[] = ['Apple', 'Banana', 'Orange'];
  removeFruit(fruit: string) {
    let index = this.fruits.indexOf(fruit);
    if (index !== -1) {
      this.fruits.splice(index, 1)
    }
  }
}
