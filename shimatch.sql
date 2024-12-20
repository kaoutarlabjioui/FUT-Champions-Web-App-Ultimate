create table players (
id_player int primary key auto_increment,
nom varchar(255),
img varchar(255),
position varchar(4) ,
rating int check(rating>=1 and rating<100),
pace int check(pace>=1 and pace<100),
shooting int check(shooting>=1 and shooting<100),
passing int check(passing>=1 and passing<100),
dribbling int check (dribbling>=1 and dribbling<100),
defending int check (defending >=1 and defending<100),
physicality INT CHECK(physicality >= 1 and physicality < 100),
diving INT CHECK(diving >= 1 and diving < 100),
handling INT CHECK(handling >= 1 and handling < 100),
kicking INT CHECK(kicking >= 1 and kicking < 100),
reflexes INT CHECK(reflexes >= 1 and  reflexes < 100),
speed INT CHECK(speed >= 1  and speed < 100),
positioning INT CHECK(positioning >= 1  and positioning < 100),
id_club int ,
id_nation int,
foreign key (id_club )references clubs (id_club),
foreign key (id_nation)REFERENCES nationnalites (id_nationnalite)
);



INSERT INTO nationnalites (nom, continent) VALUES 
('France', 'Europe'),
('Brazil', 'South America'),
('Germany', 'Europe'),
('Argentina', 'South America'),
('Spain', 'Europe'),
('Portugal', 'Europe'),
('Italy', 'Europe'),
('England', 'Europe'),
('Netherlands', 'Europe'),
('Belgium', 'Europe');

-- Populate club table
INSERT INTO clubs (nom, logo, date_create) VALUES 
('Paris Saint-Germain', 'psg_logo.png', '1970-08-12'),
('Real Madrid', 'real_madrid_logo.png', '1902-03-06'),
('Barcelona', 'barcelona_logo.png', '1899-11-29'),
('Bayern Munich', 'bayern_logo.png', '1900-02-27'),
('Manchester United', 'manutd_logo.png', '1878-03-05'),
('Juventus', 'juventus_logo.png', '1897-11-01'),
('Chelsea', 'chelsea_logo.png', '1905-03-10'),
('Ajax', 'ajax_logo.png', '1900-03-18'),
('Liverpool', 'liverpool_logo.png', '1892-06-03'),
('Manchester City', 'mancity_logo.png', '1880-11-23');

-- Populate PLAYER table
INSERT INTO players (nom, img, position, rating, pace, shooting, passing, dribbling, defending, physicality, diving, handling, kicking, reflexes, speed, positioning, id_club, id_nation) VALUES
('Lionel Messi', 'messi_img.png', 'rw', 95, 85, 92, 91, 96, 40, 65, 10, 10, 10, 10, 80, 85, 1, 2),
('Cristiano Ronaldo', 'ronaldo_img.png', 'st', 94, 89, 93, 85, 88, 42, 78, 10, 10, 10, 10, 85, 88, 2, 6),
('Neymar Jr', 'neymar_img.png', 'cmd', 92, 90, 87, 85, 95, 38, 58, 10, 10, 10, 10, 75, 82, 1, 2),
('Kylian Mbappé', 'mbappe_img.png', 'rb', 93, 97, 90, 81, 92, 36, 72, 10, 10, 10, 10, 98, 88, 1, 1),
('Kevin De Bruyne', 'de_bruyne_img.png', 'gk', 91, 75, 84, 93, 88, 62, 78, 10, 10, 10, 10, 72, 88, 10, 10),
('Robert Lewandowski', 'lewandowski_img.png', 'cmd', 92, 77, 92, 82, 80, 46, 78, 10, 10, 10, 10, 66, 83, 4, 3),
('Virgil van Dijk', 'vandijk_img.png', 'cm', 91, 75, 60, 75, 70, 92, 84, 10, 10, 10, 10, 58, 88, 9, 9),
('Manuel Neuer', 'neuer_img.png', 'gk', 90, 40, 20, 50, 60, 92, 85, 90, 91, 85, 89, 42, 88, 4, 3),
('Sadio Mané', 'mane_img.png', 'lw', 89, 93, 82, 77, 88, 42, 76, 10, 10, 10, 10, 88, 88, 10, 9),
('Sergio Ramos', 'ramos_img.png', 'cm', 89, 71, 71, 75, 72, 88, 84, 10, 10, 10, 10, 60, 84, 2, 5);


select clubs.nom from clubs ,players where players.id_club= clubs.id_club
and  players.nom='Cristiano Ronaldo';