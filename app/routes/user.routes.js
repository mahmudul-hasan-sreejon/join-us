
module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // get the home page
    app.get("/", user.home);

    // create a new user
    app.post("/register", user.register);
}