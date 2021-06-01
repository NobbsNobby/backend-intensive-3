import mongoose from 'mongoose';
import {v4} from 'uuid';

const contentSchema = new mongoose.Schema(
    {
        title: String,
        order: Number,
        uri:   String,
        hash:  {
            type:    String,
            unique:  true,
            default: () => v4(),
        },
    },
    { _id: false },
);

const lessonSchema = new mongoose.Schema(
    {
        title:       String,
        description: String,
        order:       Number,
        hash:        {
            type:     String,
            required: true,
            unique:   true,
            default:  () => v4(),
        },
        availability: [ String ],
        content:      {
            videos:   [ contentSchema ],
            keynotes: [ contentSchema ],
        },
    }, {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);
const lessons = mongoose.model('lessons', lessonSchema);

export {lessons};
