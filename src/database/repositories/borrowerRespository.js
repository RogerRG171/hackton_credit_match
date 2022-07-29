const db = require('../dbConfig.js');

class BorrowerRepository {

  async findAll() {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM borrower";

    const borrower = await conn.query(query);

    return borrower;
  }

  async findById(code) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM borrower where id = $1";

    const [borrower] = await conn.query(query, [code]);

    return borrower;
  }

  async findByEmail(email) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM borrower where email_address = $1";

    const [borrower] = await conn.query(query, [email]);

    return borrower;
  }

  async create(borrowerData) {
    const conn = await db.connectToPostgres();

    const query = "INSERT INTO borrower(type, tax_id, email_address, password, serasa_score, name, lastname, birthdate, phone_number, address_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    const query2 = "INSERT INTO address ( street, build_number, postal_code, complement, neighborhood, city, estate) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id"; //



    await conn.query(query2, [
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
        borrowerData.type,
        borrowerData.tax_id,
        borrowerData.email_address,
        borrowerData.password,
        borrowerData.serasa_score,
        borrowerData.name,
        borrowerData.lastname,
        borrowerData.birthdate,
        borrowerData.phone_number,
        borrowerData.address_id
      ], (err, results) => {
        if (err) {

          throw err;
        }
        return results.rows[0];
      });

    }

    );





  }

  async update(code, borrowerData) {
    const conn = await db.connectToPostgres();
    const query = "UPDATE borrower SET type = $1, tax_id = $2, email_address = $3, password = $4, serasa_score = $5, name = $6, lastname = $7, birthdate = $8, phone_number = $9 where id = $10 ";

    const [borrower] = await conn.query(query, [
      borrowerData.type,
      borrowerData.tax_id,
      borrowerData.email_address,
      borrowerData.password,
      borrowerData.serasa_score,
      borrowerData.name,
      borrowerData.lastname,
      borrowerData.birthdate,
      borrowerData.phone_number,
      code
    ]);

    return borrower;
  }

  async delete(code) {
    const conn = await db.connectToPostgres();
    const query = "DELETE FROM borrower where id = $1";

    await conn.query(query, [code], (err, results) => {
      if (err) {

        throw err;
      }
      return results.rows[0];
    });

  }

}

module.exports = BorrowerRepository;