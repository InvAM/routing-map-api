import { Student } from "src/student/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'conocimientoLenguajes'})
export class ConocimientoLenguajes{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lenguaje: string

    @ManyToMany(() => Student, (student) => student.conocimientoLenguajes)
    student: Student
    
}