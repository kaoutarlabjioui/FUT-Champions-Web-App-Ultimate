create table equipes(
     id int primary key auto_increment,
     logo varchar(255),
     nom varchar(255)
     );
    create table nationnalites(
     id int primary key auto_increment,
     nom varchar(255) not null ,
     flag varchar(255)not null
     );
     create table players(
        id int primary key auto_increment,
        nom varchar(255)not null,
        flag varchar(255),
        id_nationnalite int,
        id_equipe int,
        FOREIGN KEY (id_nationnalite) references nationnalites(id),
        FOREIGN KEY (id_equipe) references equipes (id)
     );
     alter table players add position enum ('RW','LW','LB','CB','ST','GK','CM');
     alter table players add rating int not null ;
     create table players_statistics(
        id     int primary key auto_increment,
        pace int not null,
        shooting int not null,
        passing int not null,
        defending int not null,
        dribbling int not null,
        physical int not null,
        diving int not null ,
        speed int not null ,
        kicking int not null,
        reflexes int not null,
        positioning int not  null,
        id_player int ,
        foreign key(id_player) references players(id)
     );
     insert into nationnalites (nom,flag) values 
     ("Argentina","https://cdn.sofifa.net/flags/ar.png"),
     ("Portugal","https://cdn.sofifa.net/flags/pt.png"),
     ("Belgium","https://cdn.sofifa.net/flags/be.png"),
     ("France","https://cdn.sofifa.net/flags/fr.png"),
     ("Netherlands","https://cdn.sofifa.net/flags/nl.png"),
     ("Germany","https://cdn.sofifa.net/flags/de.png"),
     ("Brazil","https://cdn.sofifa.net/flags/br.png"),
     ("Egypt","https://cdn.sofifa.net/flags/eg.png"),
     ("Slovenia","https://cdn.sofifa.net/flags/si.png"),
     ("Croatia","https://cdn.sofifa.net/flags/hr.png"),
     ("Morocco","https://cdn.sofifa.net/flags/ma.png"),
     ("Norway","https://cdn.sofifa.net/flags/no.png"),
     ("Canada","https://cdn.sofifa.net/flags/ca.png"),
     ("England","https://cdn.sofifa.net/flags/gb-eng.png"),
     ("Italy","https://cdn.sofifa.net/flags/it.png");

insert into equipes(nom,logo) VALUES
("Inter Miami","https://cdn.sofifa.net/meta/team/239235/120.png"),
("Al Nassr","https://cdn.sofifa.net/meta/team/2506/120.png"),
("Manchester City","https://cdn.sofifa.net/players/239/085/25_120.png"),
("Real Madrid","https://cdn.sofifa.net/meta/team/3468/120.png"),
("Liverpool","https://cdn.sofifa.net/meta/team/8/120.png"),
("Al-Hilal", "https://cdn.sofifa.net/meta/team/7011/120.png"),
("Bayern Munich","https://cdn.sofifa.net/meta/team/503/120.png"),
("Atletico Madrid","https://cdn.sofifa.net/meta/team/7980/120.png"),
("Al-Ittihad","https://cdn.sofifa.net/meta/team/476/120.png"),
("Paris Saint-Germain","https://cdn.sofifa.net/meta/team/591/120.png"),
("Fenerbahçe","https://cdn.sofifa.net/meta/team/88/120.png"),
("PSV","https://cdn.sofifa.net/meta/team/682/120.png");

ALTER TABLE players
RENAME COLUMN flag TO photo;
insert into players(player_name,photo,position,rating,id_nationnalite,id_equipe) VALUES
("Lionel Messi","https://cdn.sofifa.net/players/158/023/25_120.png","RW",93,1,1),
("Cristiano Ronaldo","https://cdn.sofifa.net/players/020/801/25_120.png","ST",91,2,2),
("Kevin De Bruyne","https://cdn.sofifa.net/players/192/985/25_120.png","CM",91,3,3),
("Kylian Mbappé","https://cdn.sofifa.net/players/231/747/25_120.png","ST", 92,4,4),
("Virgil van Dijk","https://cdn.sofifa.net/players/203/376/25_120.png","CB",90,5,5),
("Antonio Rudiger", "https://cdn.sofifa.net/players/205/452/25_120.png","CB", 88,6,4),
("Neymar Jr","https://cdn.sofifa.net/players/190/871/25_120.png", "LW", 90,7,6),
("Mohamed Salah","https://cdn.sofifa.net/players/192/985/25_120.png","RW",89,8,5),
( "Joshua Kimmich","https://cdn.sofifa.net/players/212/622/25_120.png","CM", 89,6,7),
("Jan Oblak","https://cdn.sofifa.net/players/200/389/25_120.png","GK",91,9,8),
( "Luka Modrić","https://cdn.sofifa.net/players/177/003/25_120.png","CM",88,10,4),
( "Vinicius Junior","https://cdn.sofifa.net/players/238/794/25_120.png","LW",89,7,4),
("Brahim Diáz", "https://cdn.sofifa.net/players/231/410/25_120.png","LW", 82,11,4),
("Karim Benzema","https://cdn.sofifa.net/players/165/153/25_120.png","ST", 90,4,9),
( "Erling Haaland", "https://cdn.sofifa.net/players/239/085/25_120.png","ST", 91,12,3),
("N_Golo Kanté", "https://cdn.sofifa.net/players/215/914/25_120.png","CM",87,4,9),
("Alphonso Davies","https://cdn.sofifa.net/players/234/396/25_120.png","LB",84,13,7),
("Yassine Bounou","https://cdn.sofifa.net/players/209/981/25_120.png","GK", 84,11,6);

ALTER TABLE players
RENAME COLUMN nom TO player_name;

ALTER TABLE equipes
RENAME COLUMN nom TO equipe_name;
ALTER TABLE nationnalites
RENAME COLUMN nom TO nation_name;

insert into players(player_name,photo,position,rating,id_nationnalite,id_equipe) VALUES
("Lionel Messi","https://cdn.sofifa.net/players/158/023/25_120.png","RW",93,1,1);
