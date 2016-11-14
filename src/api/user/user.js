import { Router } from 'express';
import models from '../../models';
const router = Router();

// register new user
router.post('/user', (req, res) => {

  // models.users.
});

router.get('/:name', (req, res) => {
  res.json({
    message: `hello ${req.params.name}`,
  })
});

export default router;
