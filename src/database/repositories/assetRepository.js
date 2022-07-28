const db = require('../dbConfig.js');

class AssetRepository{

    async findBycreditProfileId(){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM asset WHERE credit_profile_id = ?";

        const [asset] = await conn.query(query);

        return asset;
    }

    async findById(code){
      const conn = await db.connectToPostgres();
      const query = "SELECT * FROM asset where id = ?";

      const [asset] = await conn.query(query, [code]);

      return asset;
    }

    async findByType(type, creditProfileId){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM asset where type = ? AND credit_profile_id = ?";
  
        const [asset] = await conn.query(query, [type, creditProfileId]);
  
        return asset;
      }

      async findByTotalEstimateValue(totalEstimateValue, creditProfileId){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM asset where total_estimate_value = ? AND credit_profile_id = ?";
  
        const [asset] = await conn.query(query, [totalEstimateValue, creditProfileId]);
  
        return asset;
      }

      async findByMaxTotalEstimateValue(totalEstimateValue , creditProfileId){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM asset where total_estimate_value = MAX(total_estimate_value) AND credit_profile_id = ?";
  
        const [asset] = await conn.query(query, [totalEstimateValue , creditProfileId]);
  
        return asset;
      }

    async create(assetData, creditProfileId){
      const conn = await db.connectToPostgres();
      
      const query = "INSERT INTO asset( type, total_estimate_value, mothly_estimated_income, credit_profile_id ) VALUES(?,?,?,?)";
      

      const [asset] = await conn.query(query, [
        assetData.type, 
        assetData.total_estimate_value, 
        assetData.mothly_estimated_income, 
        creditProfileId      
    ]);

      

      return asset;
    }

    async update(code, assetData){
      const conn = await db.connectToPostgres();
      const query = "UPDATE asset SET type = ?, total_estimate_value = ?, mothly_estimated_income = ? WHERE id = ? ";

      const [asset] = await conn.query(query, [
        assetData.type, 
        assetData.total_estimate_value, 
        assetData.mothly_estimated_income,
        code   
    ]);

      return asset;
    }

    async delete(code){
      const conn = await db.connectToPostgres();
      const query = "DELETE FROM asset WHERE id = ?";

       await conn.query(query, [code]);
      
    }

}

module.exports = AssetRepository;