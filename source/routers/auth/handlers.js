
export const login = (req, res) => {
    try {
        if (req.body.email) {
            req.session.email = req.body.email;
            res.sendStatus(204);
        } else {
            throw new Error('need email');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
