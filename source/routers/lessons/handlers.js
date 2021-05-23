import {Lessons} from '../../controllers';

export const get = async ({query: {size, page}}, res) => {
    try {
        const lessons = new Lessons({size, page});
        const data = await lessons.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const post = async (req, res) => {
    try {
        const lesson = new Lessons(req.body);
        const data = await lesson.create();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
