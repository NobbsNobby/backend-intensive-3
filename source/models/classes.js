import {classes} from '../odm';

export class Classes {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await classes.create(this.data);

        return data;
    }

    async getAll() {
        const { page = 1, size = 10 } = this.data;

        const pagesCount = await classes.estimatedDocumentCount();
        const data = await classes
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
        const data = await classes
            .find({hash})
            .lean();

        return data;
    }

    async updateByHash () {
        const { hash, payload } = this.data;
        const data = await classes
            .findOneAndUpdate({hash}, payload, {new: true})
            .lean();

        return data;
    }

    async deleteByHash () {
        const { hash } = this.data;
        const data = await classes
            .findOneAndDelete({hash})
            .lean();

        return data;
    }
}
