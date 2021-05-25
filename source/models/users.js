import {users} from '../odm';

export class Users {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await users.create(this.data);

        return data;
    }

    async getAll() {
        const { page = 1, size = 10 } = this.data;

        const pagesCount = await users.estimatedDocumentCount();
        const data = await users
            .find({})
            .skip(Number(size) * (page - 1))
            .limit(Number(size))
            .lean();

        return {
            pagesCount: Math.ceil(pagesCount / size),
            data,
        };
    }

    async getByHash () {
        const { hash } = this.data;
        const data = await users
            .find({hash})
            .lean();

        return data;
    }

    async updateByHash () {
        const { hash, payload } = this.data;
        const data = await users
            .findOneAndUpdate({hash}, payload, {new: true})
            .lean();

        return data;
    }

    async deleteByHash () {
        const { hash } = this.data;
        const data = await users
            .findOneAndDelete({hash})
            .lean();

        return data;
    }
}
