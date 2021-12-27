import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password must be between 4 and 20 characters'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).send(errors.array());
      throw new Error('invalid email or password');//this would throw the error to error handling middleware
    }
    console.log('Creating a user...');
    throw new Error('Error connecting to database');
    const { email, password } = req.body;
    res.send({});
  }
);
export { router as signupRouter };
