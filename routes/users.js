import express from 'express';

import { createUser ,getUsers, getUser,deleteUser,updateUser} from '../controller/users.js'; 

const router = express.Router();


//------- all routes in here starting with /users --------// 

// / to get all user from the db 
router.get('/',getUsers);
// /users to add user to db 
router.post('/',createUser);
// /users/:id to find user from db using his id  
router.get('/:id', getUser);
// /users/:id to delete user form db using his id 
router.delete('/:id',deleteUser);
// /users/id to update it by his id 
router.patch('/:id',updateUser);

export default router;

