// Instruments
import { app } from './server';
import { getPort } from './utils';
// create fake data
// import './utils/faker';

const PORT = getPort();

import './db';

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server API is up on port ${PORT}`);
});
