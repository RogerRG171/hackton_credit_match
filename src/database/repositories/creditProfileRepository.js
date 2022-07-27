const db = require('../dbConfig.js');

class CreditProfileRepository{

    async findAll(){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM credit_profile";

        const creditProfile = await conn.query(query);

        return creditProfile;
    }

    async findById(code){
      const conn = await db.connectToPostgres();
      const query = "SELECT * FROM credit_profile where id = ?";

      const [creditProfile] = await conn.query(query, [code]);

      return creditProfile;
    }

    async findByDesiredAmount(desiredAmount){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM credit_profile where desired_amount = ?";
  
        const [creditProfile] = await conn.query(query, [desiredAmount]);
  
        return creditProfile;
      }

    async create(creditProfileData, borrower_id){
      const conn = await db.connectToPostgres();
      const query = "INSERT INTO credit_profile(borrower_type, desired_amount, has_assets, max_installment_amount, payment_plan, borrower_id) VALUES(?,?,?,?,?,?)";

      const [creditProfile] = await conn.query(query, [
        creditProfileData.borrower_type, 
        creditProfileData.desired_amount, 
        creditProfileData.has_assets, 
        creditProfileData.max_installment_amount, 
        creditProfileData.payment_plan, 
        borrower_id
    ]);

      return creditProfile;
    }

    async update(code, creditProfileData){
      const conn = await db.connectToPostgres();
      const query = "UPDATE credit_profile SET borrower_type = ?, desired_amount = ?, has_assets = ?, max_installment_amount = ?, payment_plan = ? where id = ? ";

      const [creditProfile] = await conn.query(query, [
        creditProfileData.borrower_type, 
        creditProfileData.desired_amount, 
        creditProfileData.has_assets, 
        creditProfileData.max_installment_amount, 
        creditProfileData.payment_plan, 
        code
    ]);

      return creditProfile;
    }

    async delete(code){
      const conn = await db.connectToPostgres();
      const query = "DELETE FROM credit_profile where id = ?";

       await conn.query(query, [code]);
      
    }

}

module.exports = CreditProfileRepository;