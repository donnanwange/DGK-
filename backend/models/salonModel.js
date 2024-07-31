const { sql, poolPromise } = require('../config/db');

class SalonModel {
    async createSalon(salonData) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('sname', sql.VarChar, salonData.sname)
            .input('phone_number', sql.VarChar, salonData.phone_number)
            .input('email', sql.VarChar, salonData.email)
            .input('street', sql.VarChar, salonData.street)
            .input('city', sql.VarChar, salonData.city)
            .input('us_state', sql.Char, salonData.us_state)
            .input('zipcode', sql.VarChar, salonData.zipcode)
            .query('INSERT INTO salon (sname, phone_number, email, street, city, us_state, zipcode) OUTPUT INSERTED.salon_id VALUES (@sname, @phone_number, @email, @street, @city, @us_state, @zipcode)');

        return result.recordset[0].salon_id;
    }

    async getSalons() {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM salon');
        return result.recordset;
    }
}

module.exports = new SalonModel();
