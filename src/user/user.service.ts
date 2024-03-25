import { Injectable } from "@nestjs/common";

import { User } from "./user.entity";
import { CONSTANTS } from "src/constant";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: 'user',
            password: '123456',
            email: 'admin@mail.com',
            age: 21,
            role:CONSTANTS.ROLES.ANDROID_DEVELOPER
        },
        {
            username: 'user1',
            password: '123456',
            email: 'admin2@mail.com',
            age: 24,
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
    ];

    getUserByUserName(username: string): User{
     return this.users.find((user)=>user.username==username);   
    }
}