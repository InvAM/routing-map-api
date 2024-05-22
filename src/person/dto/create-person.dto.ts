import { User } from "src/users/user.entity"

export class CreatePersonDto{
    name: string
    lastname: string
    dni: string
    age: number
    user: User
}