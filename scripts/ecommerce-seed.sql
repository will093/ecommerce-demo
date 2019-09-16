-- Customers
INSERT INTO customers ("id", "firstName", "lastName", "email")
VALUES (1, 'Will', 'Taylor', 'willtaylor.developer@gmail.com');

INSERT INTO customers ("id", "firstName", "lastName", "email")
VALUES (2, 'Jim', 'Berly', 'jimberly@gmail.com');

INSERT INTO customers ("id", "firstName", "lastName", "email")
VALUES (3, 'Charles', 'Z', 'charlesZ@gmail.com');

-- Address
INSERT INTO address ("id", "state", "city", "street", "number", "customerId")
VALUES (1, 'Bristol', 'Bristol', 'Lichfield Road', '125', 1);

INSERT INTO address ("id", "state", "city", "street", "number", "customerId")
VALUES (2, 'Dorset', 'Broad Oak', 'Glue Hill', 'Hill Brow', 1);

INSERT INTO address ("id", "state", "city", "street", "number", "customerId")
VALUES (3, 'London', 'London', 'Oxford Street', '73', 2);

-- Products
INSERT INTO products ("id", "price", "name", "description", "tagline")
VALUES (1, 15, 'King Oyster Mushroom', 'The most delicious mushroom that money can buy.', 'The king oyster mushroom is dead! Long live the new king oyster mushroom');

INSERT INTO products ("id", "price", "name", "description", "tagline")
VALUES (2, 5, 'Chestnut Mushroom', 'A nice chestnut coloured mushroom.', 'There is so mush room in your life for this mushroom.');

INSERT INTO products ("id", "price", "name", "description", "tagline")
VALUES (3, 12, 'Blue/Grey Oyster Mushroom', 'A tasty oyster mushroom - best fryed in butter.', 'A fantasticly fingerlicking fungus');

-- Items
INSERT INTO items ("id", "productionDate", "productId")
VALUES (1, '14-09-2019', 1);

INSERT INTO items ("id", "productionDate", "productId")
VALUES (2, '15-09-2019', 1);

INSERT INTO items ("id", "productionDate", "productId")
VALUES (3, '15-09-2019', 2);