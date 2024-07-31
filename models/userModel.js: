const { sql, poolPromise } = require('../config/db');

class UserModel {
    async createUser(userData) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('screen_name', sql.VarChar, userData.screen_name)
            .input('email', sql.VarChar, userData.email)
            .input('phone_number', sql.VarChar, userData.phone_number)
            .input('password_hash', sql.VarChar, userData.password_hash)
            .input('first_name', sql.VarChar, userData.first_name)
            .input('last_name', sql.VarChar, userData.last_name)
            .query('INSERT INTO [user] (screen_name, email, phone_number, password_hash, first_name, last_name) OUTPUT INSERTED.id VALUES (@screen_name, @email, @phone_number, @password_hash, @first_name, @last_name)');
        
        return result.recordset[0].id;
    }

    async getUsers() {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM [user]');
        return result.recordset;
    }

    async getUserByEmail(email) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM [user] WHERE email = @email');
        
        return result.recordset[0];
    }
}

module.exports = new UserModel();
