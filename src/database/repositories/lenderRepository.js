const db = require('../dbConfig.js');

class LenderRepository{

    async findAll(){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM lender";

        const lender = await conn.query(query);

        return lender;
    }

    async findById(code){
      const conn = await db.connectToPostgres();
      const query = "SELECT * FROM lender WHERE id = ?";

      const [lender] = await conn.query(query, [code]);

      return lender;
    }

    async findByEmail(email){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM lender WHERE email = ?";
  
        const [lender] = await conn.query(query, [email]);
  
        return lender;
      }

    async create(lenderData){
      const conn = await db.connectToPostgres();
      
      const query = "INSERT INTO lender(type, tax_id, email_address, password, trading_name, phone_number, address_id) VALUES(?,?,?,?,?,?,?)";
      const query2 = "INSERT INTO address( street, build_number, postal_code, complement, neighborhood, city, estate) VALUES(?,?,?,?,?,?,?) RETURNING id";


      const [address_id] = await conn.query(query2, [
        borrowerData.street, 
        borrowerData.build_number, 
        borrowerData.postal_code, 
        borrowerData.complement, 
        borrowerData.neighborhood, 
        borrowerData.city, 
        borrowerData.estate        
    ]);

      const [lender] = await conn.query(query, [
        lenderData.type, 
        lenderData.tax_id, 
        lenderData.email_address, 
        lenderData.password, 
        lenderData.trading_name, 
        lenderData.phone_number,
        address_id
    ]);

      return lender;
    }

    async update(code, lenderData){
      const conn = await db.connectToPostgres();
      const query = "UPDATE lender SET type = ?, tax_id = ?, email_address = ?, password = ?, trading_name = ?, phone_number = ?, address_id = ? where id = ? ";

      const [lender] = await conn.query(query, [
        lenderData.type, 
        lenderData.tax_id, 
        lenderData.email_address, 
        lenderData.password, 
        lenderData.trading_name, 
        lenderData.phone_number,
        lenderData.address_id,
        code
    ]);

      return lender;
    }

    async delete(code){
      const conn = await db.connectToPostgres();
      const query = "DELETE FROM lender where id = ?";

       await conn.query(query, [code]);
      
    }

}

module.exports = LenderRepository;