import { Role } from './Types'

export function canAccess (role: Role) {
  return role !== 'Student'
}