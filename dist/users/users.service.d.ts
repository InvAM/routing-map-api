import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
