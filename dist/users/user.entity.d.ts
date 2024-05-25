import { Student } from "src/student/student.entity";
export declare class User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    student: Student;
}
