import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'condicionEstudiante'})
export class CondicionEstudiante{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    condicion: string

    @OneToMany(() => Student, (student) => student.condicionEstudiante)
    student: Student[]
}