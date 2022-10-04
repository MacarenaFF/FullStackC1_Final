const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
//database
app.use(myConnection(mysql, {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'crud_nodes_db'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// importing routes
const customerRoutes = require('./routes/messages');
// routes
app.use('/', customerRoutes);
app.use(require('./routes/router'))
app.use(require('./routes/contact'))

// static files
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});