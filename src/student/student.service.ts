import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>){}

    createStudent(student: CreateStudentDto){
        const newStudent = this.studentRepository.create(student)
        return this.studentRepository.save(newStudent)
    }

    getStudents(){
        return this.studentRepository.find()
    }

    getStudent(id: number){
        return this.studentRepository.findOne({
            where:{
                id
            }
        })
    }

    deleteStudent(id: number){
        return this.studentRepository.delete({id})
    }

    updateStudent(id: number, student: UpdateStudentDto){
        return this.studentRepository.update({id}, student)
    }


}
