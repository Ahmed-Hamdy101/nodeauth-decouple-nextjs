import { Router, Request, Response } from 'express'

const userProfilePoint = Router()

// let me add the user don't fkn include yourself
 
userProfilePoint.route('/').get((req: Request, res: Response) => {
  res.send('User profile endpoint');
});

userProfilePoint.route('/edit').put((req: Request, res: Response) => {
  res.send('Edit user profile endpoint');
});

export default userProfilePoint