import {Lessons} from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const {lessonHash} = req.params;
        const model = new Lessons({hash: lessonHash});
        const data = await model.getByHash();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const updateByHash = async (req, res) => {
    try {
        const {lessonHash} = req.params;
        const model = new Lessons({hash: lessonHash, payload: req.body});
        const data = await model.updateByHash();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const deleteByHash = async (req, res) => {
    try {
        const {lessonHash} = req.params;
        const model = new Lessons({hash: lessonHash});
        const data = await model.deleteByHash();
        res.status(204).json(data);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
