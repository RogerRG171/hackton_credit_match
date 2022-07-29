const db = require('../dbConfig.js');

class AssetRepository {

  async findBycreditProfileId(code) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM asset WHERE credit_profile_id = $1";

    await conn.query(query, [code], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });
  }

  async findById(code) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM asset where id = $1";

    const asset = await conn.query(query, [code], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return asset;
  }

  async findByType(type, creditProfileId) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM asset where type = $1 AND credit_profile_id = $2";

    const asset = await conn.query(query, [type, creditProfileId], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });
    return asset;
  }

  async findByTotalEstimateValue(totalEstimateValue, creditProfileId) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM asset where total_estimate_value = $1 AND credit_profile_id = $2";

    const asset = await conn.query(query, [totalEstimateValue, creditProfileId], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });
    return asset;
  }

  async findByMaxTotalEstimateValue(creditProfileId) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM asset where total_estimate_value = MAX(total_estimate_value) AND credit_profile_id = $1";

    const asset = await conn.query(query, [totalEstimateValue, creditProfileId], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });
    return asset;
  }

  async create(assetData, creditProfileId) {
    const conn = await db.connectToPostgres();

    const query = "INSERT INTO asset( type, total_estimate_value, mothly_estimated_income, credit_profile_id ) VALUES($1,$2,$3,$4)";


    const [asset] = await conn.query(query, [
      assetData.type,
      assetData.total_estimate_value,
      assetData.mothly_estimated_income,
      creditProfileId
    ], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });
    return asset;
  }

  async update(code, assetData) {
    const conn = await db.connectToPostgres();
    const query = "UPDATE asset SET type = $1, total_estimate_value = $2, mothly_estimated_income = $3 WHERE id = $4 ";

    const asset = await conn.query(query, [
      assetData.type,
      assetData.total_estimate_value,
      assetData.mothly_estimated_income,
      code
    ], (err, results) => {
      if (err) {
        throw err;
      }
      return results.rows[0];
    });
    return asset;
  }

  async delete(code) {
    const conn = await db.connectToPostgres();
    const query = "DELETE FROM asset WHERE id = $1";

    await conn.query(query, [code]);

  }

}

module.exports = AssetRepository;