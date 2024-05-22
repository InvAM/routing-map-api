import { TypePerson } from "src/entities/typesPerson.entity"
import { User } from "src/users/user.entity"

export class CreatePersonDto{
    name: string
    lastname: string
    dni: string
    age: number
    user: User
    type: TypePerson
}