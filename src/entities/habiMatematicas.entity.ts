import { Student } from "src/student/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'habilidadesMatematicas'})
export class HabilidadesMatematicas{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string

    @ManyToOne(() => Student, (student) => student.habilidadMatematica)
    student: Student
}