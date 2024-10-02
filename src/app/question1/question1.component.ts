import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question1',
  standalone: true,
  imports: [],
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component {
  //Question1
  students: string[] = ['siri', 'sahasra']
  //question2
  //Array of objects
  constructor() {
    interface students {
      id: number;
      name: string;
    }
    
    //converting array to object
    const student: students[] = [
      { id: 101, name: 'siri' },
      { id: 102, name: 'shirisha' }
    ]
    const studentObject = student.reduce((obj, students) => {
      obj[students.id] = students
      return obj;
    }, {} as { [key: number]: students }
    )
    console.log(studentObject);

  }
  // const originalArray=[1,2,3,4];
  // const cloneArray=this.originalArray.slice();
  // console.log(cloneArray);

}
