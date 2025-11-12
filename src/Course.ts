import { Student } from './Student'
import { Teacher } from './Teacher'

export interface Course {
  title: string,
  teacher: Teacher,
  students: Student[],
}