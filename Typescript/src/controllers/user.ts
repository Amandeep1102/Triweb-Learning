import { Request,Response} from 'express';
import {addUserToDB} from '../models/user';
const registerUser = (req:Request, res:Response) =>{
// fetch data from req
// validation
// normalize
const userName = "Amandeep";
const password = "Password";

const result = addUserToDB (userName, password);

res.send(result);
}
export {registerUser}