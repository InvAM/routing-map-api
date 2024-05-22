import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'condicionEstudiante'})
export class CondicionEstudiante{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    condicion: string
}