import { Person } from './Person'

export class Student extends Person {
  private _grade: number[] = []

  constructor (firstname: string, lastname: string) {
    super(firstname, lastname)
    this.role = 'Student'
  }

  averageGrade () {
    let res = 0
    this._grade.forEach(grade => res += grade)
    return res / this._grade.length
  }

  addGrade (note: number) {
    if (note >= 0 && note <= 20) this._grade.push(note)
  }
}