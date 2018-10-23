import { login } from "./login.logic";

const setupRoutes = (app) => {
    app.get('/health', (req, res) => {
            res.json({
                healthy: true
            });
    });

    app.get('health', (req, res) => {
        const data = req.body;
        const isLoginOk = login(data.username, data.password);
        res.json({
            status: isLoginOk
        });
    });
};

module.exports.setupRoutes = setupRoutes;