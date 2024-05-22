import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {

    constructor(@InjectRepository(Person) private personRepository: Repository<Person>){}

    createPerson(person: CreatePersonDto){
        const newPerson = this.personRepository.create(person)
        return this.personRepository.save(newPerson)
    }

    getPersons(){
        return this.personRepository.find()
    }

    getPerson(id: number){
        return this.personRepository.findOne({
            where:{
                id
            }
        })
    }

    deletePerson(id: number){
        return this.personRepository.delete({id})
    }

    updatePerson(id: number, person: UpdatePersonDto){
        return this.personRepository.update({id}, person)
    }

}
