import { NivelAcademico } from "src/entities/nivelAcademico.entity"
import { User } from "src/users/user.entity"

export class CreateStudentDto{
    name: string
    lastname: string
    dni: string
    age: number
    idNivelAcademico: number
    idHabilidadProgramacion: number
    user: User
}