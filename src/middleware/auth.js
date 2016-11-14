import jsonwebtoken from 'jsonwebtoken';
// check if token is valid, given an id

export default function auth(req, res, next) {
  const { token } = req.body;

  if (token) {
    // verify token here
    // if valid allow access
    // otherwise throw error 401!
  }

}
