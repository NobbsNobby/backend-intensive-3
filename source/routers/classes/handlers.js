import {Classes} from '../../controllers';

export const get = async ({query: {size, page}}, res) => {
    try {
        const user = new Classes({size, page});
        const data = await user.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const post = async (req, res) => {
    try {
        const classes = new Classes(req.body);
        const data = await classes.create();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
