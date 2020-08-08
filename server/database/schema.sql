CREATE DATABASE review_data;
USE review_data;
CREATE TABLE property(
  property_name VARCHAR(40) NOT NULL,
  combined_aggregate DECIMAL(2, 1) NOT NULL,
  cleanliness_aggregate DECIMAL(2, 1) NOT NULL,
  communication_aggregate DECIMAL(2, 1) NOT NULL,
  check_in_aggregate DECIMAL(2, 1) NOT NULL,
  accuracy_aggregate DECIMAL(2, 1) NOT NULL,
  location_aggregate DECIMAL(2, 1) NOT NULL,
  value_aggregate DECIMAL(2, 1) NOT NULL,
  number_of_reviews INTEGER NOT NULL,
  PRIMARY KEY(property_name)
);

CREATE TABLE reviews(
  review_id INTEGER NOT NULL,
  cleanliness INTEGER NOT NULL,
  communication INTEGER NOT NULL,
  check_in INTEGER NOT NULL,
  accuracy INTEGER NOT NULL,
  location INTEGER NOT NULL,
  value INTEGER NOT NULL,
  property_name VARCHAR(40) NOT NULL,
  user INTEGER NOT NULL,
  date DATE NOT NULL,
  review_text VARCHAR(500) NOT NULL,
  PRIMARY KEY(review_id)
);

CREATE TABLE users(
  user_id INTEGER NOT NULL,
  user_name VARCHAR(40) NOT NULL,
  user_image_url TEXT NOT NULL,
  PRIMARY KEY(user_id)
);