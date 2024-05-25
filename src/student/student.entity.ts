import { CondicionEstudiante } from "src/entities/condiEstudiante.entity";
import { ConocimientoLenguajes } from "src/entities/conoLenguajes.entity";
import { HabilidadesBlandas } from "src/entities/habiBlandas.entity";
import { HabilidadesMatematicas } from "src/entities/habiMatematicas.entity";
import { HabilidadesProgramacion } from "src/entities/habiProgramacion.entity";
import { Intereses } from "src/entities/intereses.entity";
import { NivelAcademico } from "src/entities/nivelAcademico.entity";
//import { Person } from "src/person/person.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'students'})
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lastname: string

    @Column({unique: true, length: 7})
    dni: string

    @Column()
    age: number

    @Column()
    participacion: boolean

    @Column()
    notaPromedio: number

    @Column()
    idNivelAcademico: number

    @Column()
    idHabilidadProgramacion: number

    @Column()
    idHabilidadesMatematicas: number

    @Column()
    idCondicionEstudiante: number

    @Column()
    idConocimientoLenguajes: number

    //One to one
    @OneToOne(() => User, (user) => user.student)
    @JoinColumn()
    user: User

    //onte to many
    @ManyToOne(() => NivelAcademico, (nivelAcademico) => nivelAcademico.student)
    @JoinColumn({name: 'idNivelAcademico'})
    nivelAcademico: NivelAcademico

    //one to many
    @ManyToOne(() => HabilidadesProgramacion, (habilidadesProgramacion) => habilidadesProgramacion.student)
    @JoinColumn({name: 'idHabilidadesProgramacion'})
    habilidadProgramacion: HabilidadesProgramacion

    //one to many
    @ManyToOne(() => HabilidadesMatematicas, (habilidadesMatematicas) => habilidadesMatematicas.student)
    @JoinColumn({name: 'idHabilidadesMatematicas'})
    habilidadMatematica: HabilidadesMatematicas

    //one to many
    @ManyToOne(() => CondicionEstudiante, (condiEstudiante) => condiEstudiante.student)
    @JoinColumn({name: 'idCondicionEstudiante'})
    condicionEstudiante: CondicionEstudiante

    //many to many
    @ManyToMany(() => ConocimientoLenguajes, (conocimientoLenguajes) => conocimientoLenguajes.student)
    @JoinColumn({name: 'idConocimientoLenguajes'})
    conocimientoLenguajes: ConocimientoLenguajes[] 

    /*

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
    */

}