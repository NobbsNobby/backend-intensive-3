

export const authMiddleware = (correctPassword) => (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth === correctPassword) {
        return next();
    }
    res.status(400).json({
        message: 'incorrect payload',
    });
};
