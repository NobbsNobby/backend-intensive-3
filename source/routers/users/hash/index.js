export const getHash = (req, res) => {
    try {
        res.status(200).json({
            data: {},
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const putHash = (req, res) => {
    try {
        res.status(200).json({
            hash: '',
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const deleteHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
