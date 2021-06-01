import mongoose from 'mongoose';
import {v4} from 'uuid';


const studentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref:  'users',
        },
        status: {
            type: String,
            enum: [ 'standard', 'select', 'premium' ],
        },
        expelled: Boolean,
        notes:    String,
    },
    { _id: false },
);

const classSchema = new mongoose.Schema({
    title:       String,
    description: String,
    hash:        {
        type:     String,
        required: true,
        unique:   true,
        default:  () => v4(),
    },
    students: [ studentSchema ],
    lessons:  [
        {
            lesson: {
                type: mongoose.SchemaTypes.ObjectId,
                ref:  'lessons',
            },
            scheduled: Date,
        },
    ],
    duration: {
        started: Date,
        closed:  Date,
    },
    order: Number,
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified',
    },
});

const classes = mongoose.model('classes', classSchema);

export {classes};
