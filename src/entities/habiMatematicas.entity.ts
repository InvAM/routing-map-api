import { Student } from "src/student/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'habilidadesMatematicas'})
export class HabilidadesMatematicas{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string

    @OneToMany(() => Student, (student) => student.habilidadMatematica)
    student: Student[]
}