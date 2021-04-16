export const get = (req, res) => {
    try {
        res.status(200).json({
            data: [],
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const post = (req, res) => {
    try {
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
