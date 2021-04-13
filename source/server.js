// Core
import express from 'express';
//Routers
import * as routers from './routers';

const app = express();

app.use(express.json({ limit: '10kb' }));

// Routers
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

export { app };
