import { Enrollment } from './Enrollment'
import { Teacher } from './Teacher'
import { Student } from './Student'
import { SchoolCourse } from './SchoolCourse'

const teachers: Teacher[] = []
const students: Student[] = []
const enrollments: Enrollment[] = []
const courses: SchoolCourse[] = []

for (let i = 0; i < Math.floor(Math.random() * (20 - 5) + 5); i++) {
  teachers.push(new Teacher(`Bidule${i}`, `Chouette${i}`))
}

for (let i = 0; i < Math.floor(Math.random() * (50 - 5) + 5); i++) {
  students.push(new Student(`Truc${i}`, `Machin${i}`))
}

students.forEach((student) => {
  for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    const grade = Math.floor(Math.random() * 20)
    student.addGrade(grade)
  }
})

for (let i = 0; i < Math.floor(Math.random() * (30 - 5) + 5); i++) {
  const index = Math.floor(Math.random() * teachers.length)
  courses.push(new SchoolCourse(teachers[index], `Cours n°${i + 1}`))
}

courses.forEach(course => {
  for (let i = 0; i < Math.floor(Math.random() * (10 - 5) + 5); i++) {
    const index = Math.floor(Math.random() * students.length)
    course.addStudent(students[index])
  }
})

console.log(courses[0].prettyPrint())
