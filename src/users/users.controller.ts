import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser)
    }
}
