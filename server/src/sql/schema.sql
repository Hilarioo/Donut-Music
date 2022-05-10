CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES 
	(1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
	(2, '@Hilarioo: Still Dre - Dr. Dre', 'C5 E5 A5 C5 E5 A5 E5 B4 E5 A5 E5 G5 E5 C5 E5 B4 A5 C5 E5 A5 E5 E5 B4 A5 E5 G5 E5 C5 E5 A5 B4 A2 A1 C5 E5 A5 E5 E5 A5 B4 B4 B2 E2 B1 E1 E5 G5 E5 C5 E5 A5 C5 E2 A2 E1 A1 E5 A5 E5 E5 A5 B4 B4 B2'),
	(3, '@JustDio: Michael Jackson - Smooth Criminal', 'A4 A4 A4 A4 E4 A4 B4 B4 A4 B4 C5 C5 B4 C5 B4 G4 A4'),
	(4, '@Rui Huang: Mary Had A little Lamb', 'E4 D4 C4 D4 E4 E4 E4 D4 D4 D4 D4 E4 E4 E4 D4 C4 D4 E4 E4 E4 E4 D4 D4 E4 D4 C4'),
	(5, '@Abhijai Singh: Beautiful Now - Zedd', 'B4 B4 D4 B4 G4 G4 F4 B4 B4 D4 B4 G4 G4 F4 B4 B4 D4 B4 A4 A4 F4 D4 C4');