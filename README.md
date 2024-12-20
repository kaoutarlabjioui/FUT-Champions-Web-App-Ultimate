# FUT-Champions-Web-App-Ultimate

# En PHP, $_POST est une superglobale utilisée pour accéder aux données envoyées par un formulaire HTML en utilisant la méthode POST.
# To redirect users to another page in PHP, use the header() function.
# -------------------------------------------------------------------
## rename table
### rename table orginName to newName;
##
## rename column
### alter table tableName rename column columnName to newColumnName;
#

## delet table
### drop table nameOfTheTAble;

## add new value to the table
### alter table employees add phone_number varchar(15);

## edit data type or number of varchar()
### modify column columnName newDataType;

## change the place of the column
### alter table nameOfTable modify nameOfColumn dataTypeOfColumn after TheColumnThatWillComeBefore

## delet column
### alter table nameOfTable drop column nameOfColumn
# ----------------------------------------------------------

## add row of data to table
### insert into tableName values(1, "name", "email");

## add many rows at once
## insert into tableName values(1, "name", "email"),(2, "name2", "email2");

## if you want to add data to a row with some colums you need to spesifiy the colums that you want
### if i want just add id and name without the email
### insert into employees (id,first_name) values (7, "bahae") 

## select spesifc colums or columns
### select ColumnName, 2ColumnName from tableName

## select spesific row 
### select * from tableName where id = 1;

## select kase
### elect ColumnName from tableName where id = 1;

# -------updateRow----------------

## update tableName set name = "mohamed", password = "pass" WHERE id = 2;

# -------deletRow-----------------

## delet from tableNale; => will dele all rows

## delet spesific row
## DELETE FROM tabelName WHERE id = 2;

# time 
## CREATE Table test (
##     my_date DATE,
##     my_time TIME,
##     date_time DATETIME
## );

## INSERT INTO test ## VALUES (
##     CURRENT_DATE()+3,
##     CURRENT_TIME(),
##     now()
## );

# how to add constraint unique to a culomn if you forgot it 

# alter table tableName add unique(culomnName);
