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
            first: String,
            last:  String,
        },
        phones: [
            {
                phone:   String,
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
        password: String,
        sex:      String,
        roles:    [ String ],
        social:   {
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
