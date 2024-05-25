import { Student } from "src/student/student.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'rutasAprendizaje'})
export class RutasAprendizaje {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rutas: string

    @OneToMany(() => Student, (student) => student.rutaAprendizaje)
    student: Student
}