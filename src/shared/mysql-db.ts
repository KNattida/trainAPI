import * as mysql from  'mysql'
import * as config from 'config';
class MysqlDB{
   pool = mysql.createPool(config.get("mysql"));
   query(sql:string, cb :Function) : void {
       this.pool.getConnection((err,_con)=>{
           if(err){
               console.log(err);
           }else{
               _con.query(sql, (err, result)=>{
                 _con.release();
                 cb(err,result);
               });
           }
       });
   }
}
export const mysqlDB: MysqlDB = new MysqlDB();

