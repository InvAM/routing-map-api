import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {

    constructor(private studentService: StudentService){}

    @Get(':id')
    getStudent(@Param('id', ParseIntPipe) id: number): Promise<Student>{
        return this.studentService.getStudent(id)
    }

    @Get()
    getStudents(): Promise<Student[]>{
        return this.studentService.getStudents()
    }

    @Post()
    createStudent(@Body() newStudent: CreateStudentDto){
        return this.studentService.createStudent(newStudent)
    }

    @Delete(':id')
    deleteStudent(@Param('id', ParseIntPipe) id: number){
        return this.studentService.deleteStudent(id)
    }

    @Patch(':id')
    updateStudent(@Param('id', ParseIntPipe) id: number, @Body() student: UpdateStudentDto){
        return this.studentService.updateStudent(id, student)
    }

}
