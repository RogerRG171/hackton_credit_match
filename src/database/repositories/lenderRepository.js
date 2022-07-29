const db = require('../dbConfig.js');

class LenderRepository {

  async findAll() {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM lender";

    const lender = await conn.query(query);

    return lender;
  }

  async findById(code) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM lender WHERE id = $1";

    const lender = await conn.query(query, [code], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return lender;
  }

  async findByEmail(email) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM lender WHERE email = $1";

    const lender = await conn.query(query, [email], (err, results) => {
      if (err) {
        throw err;
      }
      return results.rows[0];
    });

    return lender;
  }

  async findByTradingName(tradingName) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM lender WHERE trading_name = $1";

    const lender = await conn.query(query, [tradingName], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return lender;
  }

  async create(lenderData) {
    const conn = await db.connectToPostgres();

    const query = "INSERT INTO lender(type, tax_id, email_address, password, trading_name, phone_number, address_id) VALUES($1,$2,$3,$4,$5,$6,$7)";
    const query2 = "INSERT INTO address ( street, build_number, postal_code, complement, neighborhood, city, estate) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id";


    const lender = await conn.query(query2, [
      borrowerData.street,
      borrowerData.build_number,
      borrowerData.postal_code,
      borrowerData.complement,
      borrowerData.neighborhood,
      borrowerData.city,
      borrowerData.estate
    ], async (err, results) => {
      if (err) {

        throw err;
      }
      borrowerData.address_id = results.rows[0].id;

      await conn.query(query, [
        lenderData.type,
        lenderData.tax_id,
        lenderData.email_address,
        lenderData.password,
        lenderData.trading_name,
        lenderData.phone_number,
        borrowerData.address_id
      ], (err, results) => {
        if (err) {

          throw err;
        }
        return results.rows[0];
      });


    });

    return lender;

  }

  async update(code, lenderData) {
    const conn = await db.connectToPostgres();
    const query = "UPDATE lender SET type = $1, tax_id = $2, email_address = $3, password = $4, trading_name = $5, phone_number = $6, address_id = $7 where id = $8 ";

    const lender = await conn.query(query, [
      lenderData.type,
      lenderData.tax_id,
      lenderData.email_address,
      lenderData.password,
      lenderData.trading_name,
      lenderData.phone_number,
      lenderData.address_id,
      code
    ], (err, results) => {
      if (err) {
        throw err;
      }
      return results.rows[0];
    });

    return lender;
  }

  async delete(code) {
    const conn = await db.connectToPostgres();
    const query = "DELETE FROM lender where id = $1";

    await conn.query(query, [code]);

  }

}

module.exports = LenderRepository;