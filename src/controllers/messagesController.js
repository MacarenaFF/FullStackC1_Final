const customerController = {};

customerController.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM recomendation', (err, recomendation) => {
     if (err) {
      res.json(err);
     }
     res.render('index', {
        data: recomendation
     });
    });
  });
};

customerController.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO recomendation set ?', data, (err, recomendation) => {
      console.log(recomendation)
      res.redirect('/');
    })
  })
};

customerController.edit = (req, res) => {
  const { Id_usuario } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM recomendation WHERE Id_usuario = ?", [Id_usuario], (err, rows) => {
      res.render('messages_edit', {
        data: rows[0]
      })
    });
  });
};

customerController.update = (req, res) => {
  const { Id_usuario } = req.params;
  const newRecomendation = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE recomendation set ? where Id_usuario = ?', [newRecomendation, Id_usuario], (err, rows) => {
    res.redirect('/');
  });
  });
};

customerController.delete = (req, res) => {
  const { Id_usuario } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM recomendation WHERE Id_usuario = ?', [Id_usuario], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = customerController;