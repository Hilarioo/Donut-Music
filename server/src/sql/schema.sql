CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES 
	(1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
	(2, 'Hilarioo Song', 'F4 F4 F4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
	(3, 'JustDio Song: Michael Jackson - Smooth Criminal', 'A4 A4 A4 A4 E4 A4 B4 B4 A4 B4 C5 C5 B4 C5 B4 G4 A4'),
	(4, 'Rui Huang Song: Mary Had A little Lamb', 'E4 D4 C4 D4 E4 E4 E4 D4 D4 D4 D4 E4 E4 E4 D4 C4 D4 E4 E4 E4 E4 D4 D4 E4 D4 C4'),
	(5, 'Abhijai Singh Song: Beautiful Now - Zedd', 'B4 B4 D4 B4 G4 G4 F4 B4 B4 D4 B4 G4 G4 F4 B4 B4 D4 B4 A4 A4 F4 D4 C4');