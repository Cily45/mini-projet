import { Person } from './Person'
import { Evaluable } from './Evaluable'
import { Student } from './Student'

export class Teacher extends Person implements Evaluable {

  constructor (firstname: string, lastname: string) {
    super(firstname, lastname)
    this.role = 'Teacher'
  }

  teach (courseTitle: string) {
    console.log(`${this.getFullName()} is teaching ${courseTitle}`)
  }

  evaluate (student: Student, note: number): void {
    if (note >= 0 && note <= 20) {
      student.addGrade(note)
    }
  }
}