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
}
