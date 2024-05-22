import { Student } from "src/student/student.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'persons'})
export class Person {
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
    //Foreign key
    @OneToOne(() => User, (user) => user.person)
    user: User

    @OneToOne(() => Student, (student) => student.person)
    student: Student
}