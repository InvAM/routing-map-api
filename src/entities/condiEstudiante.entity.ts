import { Student } from "src/student/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'condicionEstudiante'})
export class CondicionEstudiante{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    condicion: string

    @ManyToOne(() => Student, (student) => student.condicionEstudiante)
    student: Student
}