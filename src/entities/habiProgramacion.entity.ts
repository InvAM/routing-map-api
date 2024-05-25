import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'habilidadesProgramacion'})
export class HabilidadesProgramacion{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string

    @OneToMany(() => Student, (student) => student.habilidadProgramacion)
    student: Student[]
}
