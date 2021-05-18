import mongoose from 'mongoose';

const logsSchema = new mongoose.Schema(
    {
        method:   String,
        path:     String,
        duration: {
            start: Date,
            end:   Date,
        },
        payload: Object,
        agent:   mongoose.SchemaTypes.ObjectId,
    }, {
        capped: {
            size: 1024 * 50,
            max:  50000,
        },
    },
);
const logs = mongoose.model('logs', logsSchema);

export {logs};
