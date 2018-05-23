import {Router, Request, Response} from "express";
import {mysqlDB} from "../shared/mysql-db";
import * as jwt from "jwt-simple";
import * as config from 'config';
const router = Router();
router.post("/doLogin",(req:Request,res:Response)=>{
   let dat = req.body;
   let sql = `
   select
        user_code as "userCode"
       , user_first_name as "userName"
       , user_last_name as "userLastName"
       , user_email as "userEmail"
   from sc_user
       where (user_code = '${dat.userCode}' or user_email = '${dat.userCode}')
           and user_pwd = '${dat.userPwd}'
           and user_active = 'Y';   
   `;
   mysqlDB.query(sql,(err,result)=>{
       let _token = jwt.encode(
        {
            userCode:dat.userCode         
        },
        <string>config.get("TOKEN_KEY")
       );
       if(err){

           res.json(err);
       }else{
           if(result.length > 0){
               res.json({
                   success : true,
                   auth_token: _token,
                   userName:result[0].userName
               });
           }else{
               res.json({
                   success:false,
                   message:"Login Fail"
               });
           }
          
       }
   });

});
export const LoginController:Router = router;
