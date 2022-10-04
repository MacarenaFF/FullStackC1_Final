const controllerWelcome = {}


controllerWelcome.welcome = (req, res) => {
    res.render ('welcome')
};

module.exports = controllerWelcome