import {lessons} from '../odm';

export class Lessons {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await lessons.create(this.data);

        return data;
    }

    async getAll() {
        const { page = 1, size = 10 } = this.data;

        const pagesCount = await lessons.estimatedDocumentCount();
        const data = await lessons
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
        const data = await lessons
            .find({hash})
            .lean();

        return data;
    }

    async updateByHash () {
        const { hash, payload } = this.data;
        const data = await lessons
            .findOneAndUpdate({hash}, payload, {new: true})
            .lean();

        return data;
    }

    async deleteByHash () {
        const { hash } = this.data;
        const data = await lessons
            .findOneAndDelete({hash})
            .lean();

        return data;
    }
}
