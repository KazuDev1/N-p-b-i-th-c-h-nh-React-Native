import { Book } from "./Book";
import { User } from "./User";

export class Libary {
    private listBook: Array<Book>;
    private listUser: Array<User>;

    constructor(listBook = [], listUser = []) {
        this.listBook = listBook;
        this.listUser = listUser;
    }

    set setListUser(listUser: Array<User>) {
        this.listUser = listUser;
    }

    get getListBook(): Array<Book> {
        return this.listBook;
    }

    get getListUser(): Array<User> {
        return this.listUser;
    }

    addUser(user: User): boolean {
        if (user) {
            this.listUser.push(user)
            return true
        }
        return false;
    }

    removeUser(id: string): boolean {
        if (id) {
            let newListUser: Array<User> = this.listUser.filter((item) => item.getId != id);
            this.setListUser = newListUser
            return true
        }
        return false;
    }

}