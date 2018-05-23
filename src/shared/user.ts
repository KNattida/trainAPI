import { mysqlDB } from './mysql-db';

class User {
    list(cb: Function){
    let sql = `
   select
        user_code as "userCode"
       , user_title as "userTitle" 
       , user_first_name as "userName"
       , user_last_name as "userLastName"
       , user_email as "userEmail"
       , user_tel as "userTel"
   from sc_user
   `;
   mysqlDB.query(sql, cb);
    }
}
export const UserService: User = new User();