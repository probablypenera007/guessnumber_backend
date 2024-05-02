import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor (
        @InjectModel(User.name) 
        private userModel: mongoose.Model<User>
    ) {}

    async findAll(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}

