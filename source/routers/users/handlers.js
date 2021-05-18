import {Users} from '../../controllers';

export const get = async (req, res) => {
    try {
        const user = new Users();
        const data = await user.getAll();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const post = async (req, res) => {
    try {
        const user = new Users(req.body);
        const data = await user.create();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
