import { TypePerson } from "src/entities/typesPerson.entity"

export class UpdatePersonDto{
    name?: string
    lastname?: string
    dni?: string
    age?: number
    type?: TypePerson
}