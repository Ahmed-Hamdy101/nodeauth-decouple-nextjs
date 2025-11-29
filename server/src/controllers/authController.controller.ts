import { UserModel,hashPassword,verifySignIn } from '@src/models/user.model' // schema model for mongoose alts
import { UserTypes,UserDocument } from '@src/types/user.types' // user types
import connectToMongo from '@src/database/database' // mangodb connection
import { Response, Request, Application, NextFunction } from 'express'
import { _error_general } from '@src/errors/Errors'
import jwt from 'jsonwebtoken'
import config from '@src/config/config'

const userId:UserDocument  = {} as UserDocument;
// User Controller
export default class UserController{
  // read user / get all users
  async readUsers(_req:Request,_res:Response,_next:NextFunction) {
    try {
      // ensure connection
      await connectToMongo()
      // Mongoose Schma model usage
      const GetAllUser = await UserModel.find()
      return  _res.status(200).json( {status:"Ok Done ! View !",data:{...GetAllUser},message:"This Fine The all user  is retrieved "});          
    } catch (error) {
      _res.status(400).json(error);
      _next(error)
    }
  }

  // get specific user by id
   readSpecificUser = async (_req:Request,_res:Response,_next:NextFunction)=>{
    try {
      await connectToMongo() // ensure connection
      const id =_req.params.id as unknown as string;
      //  GET ID VALID
      if (id == "" ) {
              return _res.send(_error_general.checkIn.GET);
      }
      if (typeof id !== "string" ) {
              return  _res.send(_error_general.checkType.CHECKIS_STR);
      }
      // Mongoose Schma model usage
      const GetOneUser = await UserModel.findById(id)
      return  _res.status(200).json({status:"Ok Done ! View !",data:{...GetOneUser},message:"This Fine The  One User is retrieved"}); 
    }
    catch (error) {
      _res.status(400).json(error);
      _next(error)
      return null;
    }
  } 

createUser = async (_req: Request, _res: Response, _next: NextFunction) => {
  try {
    const { email, password, username, mysecret } = _req.body;

    if (!email || !password || !username) {
      return _res.status(400).json({
        status: "error",
        message: "Email, username, and password are required"
      });
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // ensure DB connection
    await connectToMongo();

    // create user
    const user = await UserModel.create({
      email,
      username,
      password: hashedPassword,
      mysecret
    });

    return _res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    _next(error);
  }
};



  //update users
 updateUser = async (_req:Request,_res:Response,_next:NextFunction)=>{
    try {
      await connectToMongo() // ensure connection
      // You should get filter and update data from _req.body or params
      const { filter, update } = _req.body;
      const result = await UserModel.updateMany(filter, update); // Mongoose Schema model usage
      return _res.status(200).json({status:"Ok Done ! Updated !",data:{...result},message:"This Fine The user is updated "}); 
    } catch (error) {
      _res.status(400).json(error);
      _next(error);
    }
  }

  // delete users
  deleteUser = async (_req:Request,_res:Response,_next:NextFunction) => {
    const id =_req.params.id as unknown as string;
    //  DELETE ID VALID
    if (id == "" ) {
            return _res.send(_error_general.checkIn.GET);
    }
    if (typeof id !== "string" ) {
            return  _res.send(_error_general.checkType.CHECKIS_INT);
    }
    
    try {
      await connectToMongo() // ensure connection
      return UserModel.deleteOne({ _id: id }) // Mongoose Schma model usage
    } catch (error) {}
  }
  // Logout users
  logoutUser = async (_req:Request,_res:Response,_next:NextFunction)=>{
    try {
      // Invalidate token logic here (if using a token blacklist or similar)
      return _res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      _res.status(400).json(error);
      _next(error);
      return null;
    }
  }

  // Authentication users

  AuthenticatedLoginUser = async (_req:Request,_res:Response,_next:NextFunction)=>{
    try {
      // ensure connection
      await connectToMongo() 
      // get Req body
      const { email, password } = _req.body;
      console.log(email,password)      // Validate input
      if (!email || !password) {
        return _res.status(400).json({ message: 'Email and password are required' });
      }
      // Mongoose Schma model usage
      const user:UserTypes | null = await UserModel.findOne({ email });
    //  Check if user exists and password matches
      if (!user) {
        return _res.status(401).json({ message: 'Authentication failed. User not found.' });
      }
      // Verify password
      const isPasswordValid = await verifySignIn(password, user.password);
      if (!isPasswordValid) {
        return _res.status(401).json({ message: 'Authentication failed. Invalid password.' });
      }
      
      const token = jwt.sign(
        { userId: userId._id, email: user.email },
        config.secureToken as string);

      // If authentication is successful, you can generate a token or session here
      return _res.status(200).json({ message: 'Authentication successful', user, token });
    } catch (error) {
      _res.status(400).json(error);
      _next(error);
      return null;

    }
  }

}
