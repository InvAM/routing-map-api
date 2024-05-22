import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'habilidadesBlandas'})
export class HabilidadesBlandas{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string
}