import express, { Router } from 'express';
//import bookshelf from './database';
const router = Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

// your controllers here..

const app = express();

// This is will log the incoming network request, on dev env should use 'dev'
// format. In production, we should use 'combined'.
const loggerType = app.get('env') === 'production' ? 'combined' : 'dev';
app.use(logger(loggerType));

// set up secret variable
app.set('opusSecretKey', 'opusappisthebest'); // secret variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes here...
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// TODO - I'm pretty sure we can do a better logging system than this!

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

export default app;

const app = express();
// set all express variables here..

app.set('opusSecretKey', 'opusappisthebest'); // secret variable

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'This is opus',
  })
});

// implement all the routes here...
// once you get them all to work, separate them into modules!

// list of endpoints to implement
// [POST] /user
// [GET] /user
//
// [POST] /auth
//
// [GET] /favr
//


// bookshelf models
// need schema validation!
/*
const User = bookshelf.Model.extend({
  tableName: 'users',
});

const Users = bookshelf.Collection.extend({
  model: User,
})

router.route('/user')
  .get((req, res) => {
    User.fetchAll().then(rows => {
      // need to protect this path by checking if the request has valid token,
      const token = req.body.token || req.query.token || req.headers['x-access-token'];

      if (token) {
        jwt.verify(token, app.get('opusSecretKey'), (err, decoded) => {
          if (err) {
            return res.json({
              message: 'Please authenticate first!'
            })
          }

          return res.json({
            message: 'SUCCESS',
            data: rows,
          })

        });
      }

      return res.status(403).json({message: 'NO TOKEN PROVIDED'})

    })
    .catch(err => res.status(500).json({message: err}));
  })
  .post((req, res) => {
    const { id, first_name, last_name, email, password } = req.body;

    // encrypt password
    bcrypt.hash(password, 10, (err, hash) => {
      // console.log(User.forge);
      // hash is the encrypted password

      User.forge({
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        encrypted_password: hash,
      })
      .save(null, {method: 'insert'})
      .then((user) => {
        res.status(200).json({
          message: 'Registration success!'
        })
      })
      .catch(err => res.status(500).json({message: err}));
    })
  });

router.route('/authenticate')
  .post((req, res) => {
    User.where({ email: req.body.email })
     .fetch()
     .then((user) => {
       // check password here...
       const userPass = user.get('encrypted_password');
       const enteredPass = req.body.password;

       bcrypt.compare(enteredPass, userPass, (err, isMatch) => {
         if (err) throw err;
         if (!isMatch) {
           return res.status(200).json({
             message: 'AUTH FAILED, wrong credentials',
           })
         }

         const token = jwt.sign(user, app.get('opusSecretKey'));

         return res.status(200).json({
           message: 'AUTH SUCCESS!',
           token: token,
         });

       });
     })
  });
*/
// the app should require everything in here
//
// POST /login - logging in using username and password
// POST /user - register user the first time
// POST /user/:id - updating user details with valid token
// GET /user/:id - getting user’s detail given valid token
// GET /user/:id/favr_transactions - get user history of transaction, need auth
// GET /user/:id/comments - get comments for the user comments
// GET /favrs?type=SOMETIME&subtype=SOMESUBTYPE&page=2 - getting list of FAVRs
// GET /favr/:id - get favr post
// POST /favr - post a new Favr, require auth
// POST /favr_transaction - relate one user to the other through a favr
// GET /favr_transaction/:id - get favr_transaction
// POST /favr_transaction/:id - edit favr_transaction - type ENGAGE, IN-PROGRESS, COMPLETED, CANCELLED
// POST /favr_comment
// GET /favr_comments/:favr_id
// GET /favr_comment/:id


module.exports = router;
