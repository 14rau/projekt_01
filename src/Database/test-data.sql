INSERT INTO component_type (type)
VALUES ('Tablet');

INSERT INTO seal (name, criteria, boundaries)
VALUES ('MPR II','Bildschirmstrahlung','elektromagnetischen und elektrostatischen Felder von Monitoren in 50 cm Abstand');

INSERT INTO manufacturer (name)
VALUES ('Lenovo');

INSERT INTO manufacturer (name)
VALUES ('Sony');

INSERT INTO manufacturer (name)
VALUES ('Acer');

INSERT INTO manufacturer (name)
VALUES ('Intel');

INSERT INTO product_designation
VALUES (1, 'Xperia Tablet Z SGP312', 19990, 'Prozessor: Quad Core, Qualcomm Snapdragon S4 Pro APQ8064, (1,5GHz, 2GB RAM, 32GB HDD, Android OS 4)
Besonderheiten: HD Reality Display 25, 6 cm (10, 1 Zoll) mit Mobile Bravia Engine 2
Betriebssystem: Android 4.1 (Jelly Bean)', 1, 2);

INSERT INTO product_designation
VALUES (2, 'YOGA Tablet 2-1051', 15699, 'Prozessor: Intel Atom Z3745 (mit Turbo-Boost bis zu 1,86 GHz, Microsoft Windows 8.1)
Besonderheiten: Webcam vorne 1,6 MP, hinten 8 MP, WLAN 801.11 a/b/g/n, Bluetooth 4.0
Akku: Li-Ion, bis zu 18 Stunden, 1x microSD-Schacht, 1x micro-USB 2.0 OTG', 1, 1);

INSERT INTO product_designation
VALUES (3, 'Acepad A121', 15490, '10.1 IPS, capacitive touch screen with a 1280 x 800 Resolution | Android 5.1 Lollipop
2GB DDR3 Memory | 64GB total memory 32 GB internal + 32GB MicroSD) | Quad Core CPU
2 SIM card slots (3G Dual SIM) for phone calls, SMS and mobile surfing GPS function, Dual Cameras', 1, 3);

INSERT INTO product (location, designation_id)
VALUES ('Abteilung 1',1);

INSERT INTO product (location, designation_id)
VALUES ('Abteilung 2',1);

INSERT INTO product (location, designation_id)
VALUES ('Abteilung 5',1);

INSERT INTO product (location, designation_id)
VALUES ('Donald Trump',1);

INSERT INTO product (location, designation_id)
VALUES ('Ersatzteillager',1);

INSERT INTO product (location, designation_id)
VALUES ('Ersatzteillager',1);

INSERT INTO special_requirements (requirement)
VALUES ('sehr leise');

INSERT INTO special_requirements (requirement)
VALUES ('niedriger Stromverbrauch');

INSERT INTO product_seal 
VALUES (1,1);

INSERT INTO product_seal 
VALUES (2,1);

INSERT INTO product_requirements
VALUES (1,1);

INSERT INTO product_requirements
VALUES (1,2);

INSERT INTO product_requirements
VALUES (2,1);
