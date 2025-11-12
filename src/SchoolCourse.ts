import { Course } from './Course'
import { Student } from './Student'
import { Teacher } from './Teacher'

export class SchoolCourse implements Course {
  students: Student[] = []
  teacher: Teacher
  title: string

  constructor (teacher: Teacher, title: string) {
    this.teacher = teacher
    this.title = title
  }

  addStudent (student: Student) {
    this.students.push(student)
  }

  averageGrade () {
    let sum = 0
    this.students.forEach(student => sum += student.averageGrade())
    return (sum / this.students.length).toFixed(1)
  }


  prettyPrint () {
    const line = '-'.repeat(20)
    return `${line}\nCours: ${this.title}\nProfesseur: ${this.teacher.getFullName()}\nEtudiants: ${this.students.length}\nMoyenne générale: ${this.averageGrade()}\n${line}\n`
  }
}