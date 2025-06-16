//this is routes for user
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('User route is working');
});



export default userRouter;
// This is a simple user route that responds with a message when accessed.