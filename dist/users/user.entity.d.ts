import { Person } from "src/person/person.entity";
export declare class User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    person: Person;
}
