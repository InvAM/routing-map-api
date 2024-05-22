import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'habilidadesProgramacion'})
export class HabilidadesProgramacion{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string
}
