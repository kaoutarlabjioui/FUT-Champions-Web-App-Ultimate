-- Active: 1734082615562@@127.0.0.1@3306@fut_ult
create  table cruds(
    id int primary key AUTO_INCREMENT,
    fname varchar(500) not null,
    email  varchar(500) not null ,
    password varchar(500) NOT NULl,
    mobile varchar (500)
);
select* from cruds;
 DESCRIBE cruds;
 