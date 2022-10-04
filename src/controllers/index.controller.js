const controller = {}
const titulo = 'Proyecto FullStack C1' // empezamos a usar hbs
controller.index = (req, res) => {
    res.render ('index', {titulo:titulo})
};

module.exports = controller

