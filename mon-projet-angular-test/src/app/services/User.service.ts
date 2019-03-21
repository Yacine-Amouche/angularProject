import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'coca',
            hobbies: [
                'coder',
                'cinĂ©ma'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }

}
