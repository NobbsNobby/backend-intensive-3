

export const authenticate = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth === correctPassword) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
