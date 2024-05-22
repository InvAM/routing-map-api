import { Person } from "src/person/person.entity"
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string
    
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date
    
    @Column({nullable: true})
    authStrategy: string

    @OneToOne(() => Person, (person) => person.user)
    @JoinColumn()
    person: Person
}