import {Users} from '../../controllers';

export const get = async ({query: {size, page}}, res) => {
    try {
        const model = new Users({size, page});
        const data = await model.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const post = async (req, res) => {
    try {
        const model = new Users(req.body);
        const data = await model.create();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
