import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'habilidadesBlandas'})
export class HabilidadesBlandas{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string

    @OneToMany(() => Student, (student) => student.habilidadesBlandas)
    student: Student[]
}