import mongoose from 'mongoose';
import {v4} from 'uuid';

const userSchema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            default:  () => v4(),
        },
        name: {
            first: {
                type:     String,
                required: true,
            },
            last: {
                type:     String,
                required: true,
            },
        },
        phones: [
            {
                phone: {
                    type:     String,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        emails: [
            {
                email: {
                    type:   String,
                    unique: true,
                },
                primary: Boolean,
            },
        ],
        password: {
            type:     String,
            select:   false,
            required: true,
        },
        sex: {
            type:     String,
            enum:     [ 'm', 'f' ],
            required: true,
        },
        roles: [
            {
                type:    String,
                default: 'newbie',
                enum:    [ 'newbie', 'student', 'teacher' ],
            },
        ],
        social: {
            facebook: String,
            linkedin: String,
            github:   String,
            skype:    String,
        },
        notes:    String,
        disabled: Boolean,
    }, {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);
const users = mongoose.model('users', userSchema);

export {users};
