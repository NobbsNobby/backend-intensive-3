import {Classes as ClassesModel} from '../models';


export class Classes {
    constructor(data) {
        this.model = {
            classes: new ClassesModel(data),
        };
    }

    async create() {
        const data = await this.model.classes.create();

        return data;
    }

    async getAll() {
        const data = await this.model.classes.getAll();

        return data;
    }
}
