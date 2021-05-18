import {Users as UsersModel} from '../models';


export class Users {
    constructor(data) {
        this.model = {
            users: new UsersModel(data),
        };
    }

    async create() {
        const data = await this.model.users.create();

        return data;
    }

    async getAll() {
        const data = await this.model.users.getAll();

        return data;
    }
}
