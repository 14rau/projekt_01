--Ausgabe aller Komponentenmit Leistungsmerkmalen sortiert nach Art und dann nach preis

SELECT product_name, performance, price FROM product_designation 
ORDER BY type_id, price ;

--Ausgabe aller Komp. ohne Ergonomiemerkmale

SELECT product_name, performance, price FROM product_designation AS p
LEFT JOIN product_requirement AS pr ON p.id = pr.product_id
WHERE pr.product_id IS NULL;

--ausgabe der teuersten, preiswertesten und durchschnittlichen preises für einen Komponententyp

SELECT product_name, price FROM product_designation
WHERE type_id = (SELECT id FROM component_type WHERE type = [component_type])
ORDER BY price DESC 
LIMIT 1 ;

SELECT product_name, price FROM product_designation
WHERE type_id = (SELECT id FROM component_type WHERE type = [component_type])
ORDER BY price ASC 
LIMIT 1 ;

SELECT AVG(price) FROM product_designation
WHERE type_id = (SELECT id FROM component_type WHERE type = [component_type]);

--gesamtübersicht aller Gütesiegel

SELECT name, criteria, boundaries FROM seal;

--Einzelpreis ändern

UPDATE product_designation
  SET price = [new_price]
  WHERE id = [product_id];

--Tablet-location Suche

SELECT location FROM product
WHERE id = [product_id];

--Alle Produkte eines Herstellers

SELECT product_name FROM product_designation
WHERE type_id =(SELECT id FROM component_type WHERE name = [manufacturer_name]);

--Alle Produkte einer Komponentenart

SELECT product_name FROM product_designation
WHERE manufacturer_id =(SELECT id FROM manufacturer WHERE name = [component_type]);

--Produkte mit best. Siegel

SELECT product_name FROM product_designation
WHERE seal_id =(SELECT id FROM seal WHERE name = [seal_name]);

--Anzahl des Bestandes aller Komponenten

SELECT name, count(name) FROM product 
GROUP BY name;



