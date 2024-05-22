import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'typePerson'})
export class TypePerson{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String
}