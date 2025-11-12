import { Role } from './Types'

export class Person {
  protected firstname: string;
  protected lastname: string;
  protected role: Role | null = null;


  constructor (firstname: string, lastname: string) {
    this.firstname = firstname
    this.lastname = lastname
  }

  getFullName (): string {
    return `${this.firstname} ${this.lastname}`
  }


}