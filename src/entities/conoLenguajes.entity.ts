import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'conocimientoLenguajes'})
export class ConocimientoLenguajes{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lenguaje: string
}