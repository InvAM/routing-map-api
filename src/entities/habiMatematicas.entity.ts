import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'habilidadesMatematicas'})
export class habilidadesMatematicas{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    habilidades: string
}