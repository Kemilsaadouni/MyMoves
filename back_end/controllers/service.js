const db = require('../database')

module.exports = {
    create: (data, callBack) => {
        db.query(
            `insert into users( mail, password) values(?,?)`,
            [
                data.mail,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUsers : callBack => {
        db.query(
            `select mail, password from users`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    getUserByUserId: (id, callBack) => {
        db.query(
            `select id, mail, password from users where id = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    callBack(error)
                }
                return callBack (null, results)
            }
        )
    },
    updateUser: (data, callBack) => {
        db.query(
            `update users set mail=?,password=? where id = ?`,
            [
                data.mail,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        )

    },
    getUserByEmail: (mail, callBack) => {
        db.query(
            "select * from users where mail = ?",
            [mail],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }
}