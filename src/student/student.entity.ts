import { CondicionEstudiante } from "src/entities/condiEstudiante.entity";
import { ConocimientoLenguajes } from "src/entities/conoLenguajes.entity";
import { HabilidadesBlandas } from "src/entities/habiBlandas.entity";
import { HabilidadesMatematicas } from "src/entities/habiMatematicas.entity";
import { HabilidadesProgramacion } from "src/entities/habiProgramacion.entity";
import { Intereses } from "src/entities/intereses.entity";
import { NivelAcademico } from "src/entities/nivelAcademico.entity";
import { Person } from "src/person/person.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'students'})
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    //One to one
    @OneToOne(() => Person, (person) => person.student)
    @JoinColumn()
    person: Person

    //onte to many
    @OneToMany(() => NivelAcademico, (nivelAcademico) => nivelAcademico.student)
    nivelAcademico: NivelAcademico[]

    //one to many
    @OneToMany(() => HabilidadesProgramacion, (habilidadesProgramacion) => habilidadesProgramacion.student)
    habilidadProgramacion: HabilidadesProgramacion[]

    //one to many
    @OneToMany(() => HabilidadesMatematicas, (habilidadesMatematicas) => habilidadesMatematicas.student)
    habilidadMatematica: HabilidadesMatematicas[]

    @Column()
    participacion: boolean

    @Column()
    notaPromedio: number

    //one to many
    @OneToMany(() => CondicionEstudiante, (condiEstudiante) => condiEstudiante.student)
    condicionEstudiante: CondicionEstudiante[]

    //many to many
    @ManyToMany(() => ConocimientoLenguajes)
    @JoinTable()
    conocimientoLenguajes: ConocimientoLenguajes[] 

    //many to many
    @ManyToMany(() => HabilidadesBlandas)
    @JoinTable()
    habilidadesBlandas: HabilidadesBlandas[]
    //many to many
    @ManyToMany(() => Intereses)
    @JoinTable()
    intereses: Intereses[] 

    @Column()
    rutaAprendizaje: number

}