import { Student } from './Student'
import { Course } from './Course'
import { EnrollmentStatement } from './Types'


export interface Enrollment {
  student: Student
  course: Course
  status: EnrollmentStatement
}

export const getActiveStudents = (enrollments: Enrollment[]) => {
  const res :Student[] = []
  enrollments.forEach(enrollment => {
    if(enrollment.status === 'active') {
      res.push(enrollment.student)
    }
  })
  return res
}