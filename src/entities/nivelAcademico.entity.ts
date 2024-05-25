import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'nivelAcademico'})
export class NivelAcademico{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @OneToMany(() => Student, (student) => student.nivelAcademico)
    student: Student[]
    
}