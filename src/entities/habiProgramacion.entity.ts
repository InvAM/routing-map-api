import { Student } from "src/student/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'habilidadesProgramacion'})
export class HabilidadesProgramacion{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string

    @ManyToOne(() => Student, (student) => student.habilidadProgramacion)
    student: Student
}
