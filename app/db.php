<?php
$servername="db";
$db_username="root";
$db_pass="rootPassword";
$db_name="my_database";
$port=3306;




$db_connt= mysqli_connect($servername,$db_username , $db_pass, $db_name);
if (!$db_connt){
    echo "404";
}

?>

