const db = require('../dbConfig.js');

class ProductOfferRepository {

  async findAll() {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer";

    const productOffer = await conn.query(query);

    return productOffer;
  }

  async findById(code) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE id = $1";

    const productOffer = await conn.query(query, [code], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByExpirationDate(expirationDate) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE expiration_date = $1";

    const productOffer = await conn.query(query, [expirationDate], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByMaxRate(maxRate) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE max_effective_interest_rate = $1";

    const productOffer = await conn.query(query, [maxRate], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByAssetsAccepted(assetsAccepted) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE assets_accepted_as_collateral = $1";

    const productOffer = await conn.query(query, [assetsAccepted], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByPaymentPlan(paymentPlan) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE payment_plan_options = $1";

    const productOffer = await conn.query(query, [paymentPlan], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByTermOptions(termOptions) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE term_options = $1";

    const productOffer = await conn.query(query, [termOptions], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }


  async findByMinRiskScore(minRiskScore) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE min_risk_score = $1";

    const productOffer = await conn.query(query, [minRiskScore], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async findByLenderId(lenderId) {
    const conn = await db.connectToPostgres();
    const query = "SELECT * FROM product_offer WHERE lender_id = $1";

    const productOffer = await conn.query(query, [lenderId], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async create(productOfferData) {
    const conn = await db.connectToPostgres();

    const query = "INSERT INTO product_offer(expiration_date, credit_type, max_effective_interest_rate, assets_accepted_as_collateral, requires_collateral, min_risk_score, payment_plan_options, term_options, lender_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";

    const productOffer = await conn.query(query, [
      productOfferData.expiration_date,
      productOfferData.credit_type,
      productOfferData.max_effective_interest_rate,
      productOfferData.assets_accepted_as_collateral,
      productOfferData.requires_collateral,
      productOfferData.min_risk_score,
      productOfferData.payment_plan_options,
      productOfferData.term_options,
      productOfferData.lender_id
    ], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });



    return productOffer;
  }

  async update(code, productOfferData) {
    const conn = await db.connectToPostgres();
    const query = "UPDATE product_offer SET expiration_date = $1, credit_type = $2, max_effective_interest_rate = $3, assets_accepted_as_collateral = $4, requires_collateral = $5, min_risk_score = $6, payment_plan_options = $7, term_options = $8, lender_id = $9 WHERE id = $10 ";

    const productOffer = await conn.query(query, [
      productOfferData.expiration_date,
      productOfferData.credit_type,
      productOfferData.max_effective_interest_rate,
      productOfferData.assets_accepted_as_collateral,
      productOfferData.requires_collateral,
      productOfferData.min_risk_score,
      productOfferData.payment_plan_options,
      productOfferData.term_options,
      productOfferData.lender_id,
      code
    ], (err, results) => {
      if (err) {
        throw err;
      }

      return results.rows[0];
    });

    return productOffer;
  }

  async delete(code) {
    const conn = await db.connectToPostgres();
    const query = "DELETE FROM product_offer WHERE id = $1";

    await conn.query(query, [code]);

  }

}

module.exports = ProductOfferRepository;