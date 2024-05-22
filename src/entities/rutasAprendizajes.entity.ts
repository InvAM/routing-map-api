import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'rutasAprendizaje'})
export class RutasAprendizaje {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rutas: string
}