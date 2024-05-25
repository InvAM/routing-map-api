import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(id: number): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(newUser: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    validateUser(createDto: CreateUserDto): Promise<User>;
}
