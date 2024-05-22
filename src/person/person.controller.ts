import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('persons')
export class PersonController {

    constructor(private personsService: PersonService){}

    @Get(':id')
    getPerson(@Param('id', ParseIntPipe) id: number): Promise<Person>{
        return this.personsService.getPerson(id)
    }

    @Get()
    getPersons(): Promise<Person[]>{
        return this.personsService.getPersons()
    }

    @Post()
    createPerson(@Body() newPerson: CreatePersonDto): Promise<Person>{
        return this.personsService.createPerson(newPerson)
    }

    @Delete(':id')
    deletePerson(@Param('id', ParseIntPipe) id: number){
        return this.personsService.deletePerson(id)
    }

    @Patch(':id')
    updatePerson(@Param('id', ParseIntPipe) id: number, @Body() person: UpdatePersonDto){
        return this.personsService.updatePerson(id, person)
    }


}
