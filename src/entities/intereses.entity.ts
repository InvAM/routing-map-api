import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'intereses'})
export class Intereses{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    intereses: string
}