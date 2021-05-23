import {Lessons as LessonsModel} from '../models';


export class Lessons {
    constructor(data) {
        this.model = {
            lessons: new LessonsModel(data),
        };
    }

    async create() {
        const data = await this.model.lessons.create();

        return data;
    }

    async getAll() {
        const data = await this.model.lessons.getAll();

        return data;
    }
}
