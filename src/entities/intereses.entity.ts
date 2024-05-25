import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'intereses'})
export class Intereses{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    intereses: string

    @OneToMany(() => Student, (student) => student.intereses)
    student: Student[]
}