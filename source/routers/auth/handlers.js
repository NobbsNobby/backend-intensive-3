import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import {getPassword} from '../../utils/env/getPassword';


const sign = promisify(jwt.sign);
const key = getPassword();

export const login = async (req, res) => {
    try {
        if (req.body.email && req.body.name) {
            const token = await sign(req.body, key, {expiresIn: '1m'});

            res.append('x-token', token);
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
