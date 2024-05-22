import { Student } from "src/student/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'nivelAcademico'})
export class NivelAcademico{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @ManyToOne(() => Student, (student) => student.nivelAcademico)
    student: Student
    
}