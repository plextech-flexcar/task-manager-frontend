
import { User } from '../models/User';

export function populateUsers(userList: User[]){
    const user: Record<number, User> = {}
    for (let i = 0; i < userList.length; i++) {
      const userId = userList[i].id;
      user[userId] = userList[i];
    }
    console.log("USERS", user)
    return user;
}