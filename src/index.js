import { setupRoutes } from './controller';

const Express = require('express');
const Helmet = require('helmet');

const app = Express();

app.use(Helmet());
app.use(Express.json());

setupRoutes(app);

app.listen(9000, () => {
    console.log(`API started on port 9000`);
});