const db = require('../dbConfig.js');

class ProductOfferRepository{

    async findAll(){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer";

        const productOffer = await conn.query(query);

        return productOffer;
    }

    async findById(code){
      const conn = await db.connectToPostgres();
      const query = "SELECT * FROM product_offer WHERE id = ?";

      const [productOffer] = await conn.query(query, [code]);

      return productOffer;
    }

    async findByExpirationDate(expirationDate){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE expiration_date = ?";
  
        const [productOffer] = await conn.query(query, [expirationDate]);
  
        return productOffer;
      }

    async findByMaxRate(maxRate){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE max_effective_interest_rate = ?";
  
        const [productOffer] = await conn.query(query, [maxRate]);
  
        return productOffer;
      }

    async findByAssetsAccepted(assetsAccepted){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE assets_accepted_as_collateral = ?";
  
        const [productOffer] = await conn.query(query, [assetsAccepted]);
  
        return productOffer;
      }

    async findByPaymentPlan(paymentPlan){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE payment_plan_options = ?";
  
        const [productOffer] = await conn.query(query, [paymentPlan]);
  
        return productOffer;
      }

    async findByTermOptions(termOptions){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE term_options = ?";
  
        const [productOffer] = await conn.query(query, [termOptions]);
  
        return productOffer;
      }

    
    async findByMinRiskScore(minRiskScore){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE min_risk_score = ?";
  
        const [productOffer] = await conn.query(query, [minRiskScore]);
  
        return productOffer;
      }

    async findByLenderId(lenderId){
        const conn = await db.connectToPostgres();
        const query = "SELECT * FROM product_offer WHERE lender_id = ?";
  
        const [productOffer] = await conn.query(query, [lenderId]);
  
        return productOffer;
      }

    async create(productOfferData){
      const conn = await db.connectToPostgres();
      
      const query = "INSERT INTO product_offer(expiration_date, credit_type, max_effective_interest_rate, assets_accepted_as_collateral, requires_collateral, min_risk_score, payment_plan_options, term_options, lender_id) VALUES(?,?,?,?,?,?,?,?,?)";
      
      const [productOffer] = await conn.query(query, [
        productOfferData.expiration_date, 
        productOfferData.credit_type, 
        productOfferData.max_effective_interest_rate, 
        productOfferData.assets_accepted_as_collateral, 
        productOfferData.requires_collateral, 
        productOfferData.min_risk_score, 
        productOfferData.payment_plan_options, 
        productOfferData.term_options, 
        productOfferData.lender_id        
    ]);

     

      return productOffer;
    }

    async update(code, productOfferData){
      const conn = await db.connectToPostgres();
      const query = "UPDATE product_offer SET expiration_date = ?, credit_type = ?, max_effective_interest_rate = ?, assets_accepted_as_collateral = ?, requires_collateral = ?, min_risk_score = ?, payment_plan_options = ?, term_options = ?, lender_id = ? WHERE id = ? ";

      const [productOffer] = await conn.query(query, [
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
    ]);

      return productOffer;
    }

    async delete(code){
      const conn = await db.connectToPostgres();
      const query = "DELETE FROM product_offer WHERE id = ?";

       await conn.query(query, [code]);
      
    }

}

module.exports = ProductOfferRepository;