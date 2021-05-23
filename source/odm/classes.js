import mongoose from 'mongoose';
import {v4} from 'uuid';

const classSchema = new mongoose.Schema({
    title:       String,
    description: String,
    hash:        {
        type:     String,
        required: true,
        unique:   true,
        default:  () => v4(),
    },
    students: [
        {
            user:     mongoose.SchemaTypes.ObjectId,
            status:   String,
            expelled: Boolean,
            notes:    String,
        },
    ],
    lessons: [
        {
            lesson:    mongoose.SchemaTypes.ObjectId,
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
