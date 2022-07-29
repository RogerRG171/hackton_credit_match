/*Este é o SQL para criação do banco e das tabelas*/

CREATE DATABASE match_db;

CREATE TABLE IF NOT EXISTS address (
  id serial NOT NULL,
  street VARCHAR(100) ,
  build_number INT ,
  postal_code VARCHAR(45) ,
  complement VARCHAR(45) ,
  neighborhood VARCHAR(100) ,
  city VARCHAR(200) ,
  estate VARCHAR(200) ,
  PRIMARY KEY (id));
  
  CREATE TABLE IF NOT EXISTS borrower (
  id SERIAL NOT NULL ,
  type VARCHAR(45) NULL,
  tax_id VARCHAR(45) ,
  email_address VARCHAR(100) unique,
  password VARCHAR(200) ,
  serasa_score INT ,
  name VARCHAR(200) ,
  lastname VARCHAR(200) ,
  birthdate DATE ,
  phone_number VARCHAR(100) ,
  address_id serial,  
  PRIMARY KEY (id),
  foreign key (address_id) references address(id) on delete cascade  
);
  
 CREATE TABLE IF NOT EXISTS credit_profile (
  id serial NOT NULL,
  borrower_type VARCHAR(45) ,
  desired_amount INT ,
  has_assets BOOLEAN ,
  max_installment_amount INT ,
  payment_plan VARCHAR(45) ,
  borrower_id serial ,
  PRIMARY KEY (id),
  FOREIGN KEY (borrower_id)    REFERENCES borrower(id)
    );
    
    CREATE TABLE IF NOT EXISTS asset (
  id serial NOT NULL,
  type VARCHAR(45) ,
  total_estimate_value INT ,
  mothly_estimated_income INT ,
  credit_profile_id serial ,
  PRIMARY KEY (id),
  FOREIGN KEY (credit_profile_id)    REFERENCES credit_profile (id)
    );
    
    CREATE TABLE IF NOT EXISTS lender (
  id serial NOT NULL,
  tax_id VARCHAR(45) ,
  email_address VARCHAR(100) ,
  password VARCHAR(200) ,
  trading_name VARCHAR(200) ,
  phone_number VARCHAR(100) ,
  address_id serial,
  PRIMARY KEY (id),
  FOREIGN KEY (address_id)   REFERENCES address (id)
   );
   
   CREATE TABLE IF NOT EXISTS product_offer (
  id serial NOT NULL,
  lender_id serial ,
  expiration_date DATE ,
  credit_type VARCHAR(45) ,
  max_effective_interest_rate INT ,
  assets_accepted_as_collateral VARCHAR(250) ,
  requires_collateral boolean ,
  min_risk_score INT ,
  payment_plan_options VARCHAR(250) ,
  term_options VARCHAR(250) ,
  PRIMARY KEY (id),
  FOREIGN KEY (lender_id) REFERENCES lender (id)
    );
    
    CREATE TABLE IF NOT EXISTS match_credit (
  credit_profile_id serial NOT NULL,
  product_id serial NOT NULL,
  PRIMARY KEY (credit_profile_id, product_id),
  FOREIGN KEY (credit_profile_id) REFERENCES credit_profile (id),
  FOREIGN KEY (product_id)  REFERENCES product_offer (id)
   );