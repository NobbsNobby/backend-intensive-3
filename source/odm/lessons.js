import mongoose from 'mongoose';
import {v4} from 'uuid';

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
            videos: [
                {
                    hash:  String,
                    title: String,
                    order: Number,
                    uri:   String,
                },
            ],
            keynotes: [
                {
                    hash:  String,
                    title: String,
                    order: Number,
                    uri:   String,
                },
            ],
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
