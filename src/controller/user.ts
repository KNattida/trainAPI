import {Router, Request, Response} from 'express';
import { mysqlDB } from '../shared/mysql-db';
import { jwt } from '../shared/auth'; 
import { UserService } from '../shared/user';

const router = Router();
router.get('', jwt.authenticate(), (req: Request, res: Response) => {
    UserService.list((err, result)=>{
        res.json(result);
    });   
});

export const UserController: Router= router;