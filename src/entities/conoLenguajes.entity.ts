import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'conocimientoLenguajes'})
export class ConocimientoLenguajes{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lenguaje: string

    @OneToMany(() => Student, (student) => student.conocimientoLenguajes)
    student: Student[]
    
}