export const getVideoByHash = (req, res) => {
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


export const removeVideoByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const getKeynoteByHash = (req, res) => {
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


export const removeKeynoteByHash = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const addVideo = (req, res) => {
    try {
        res.status(201).json({
            data: {},
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
export const addKeynote = (req, res) => {
    try {
        res.status(201).json({
            data: {},
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
