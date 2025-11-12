import { Student } from './Student'

export interface Evaluable{
  evaluate(student :Student, note :number) :void
}