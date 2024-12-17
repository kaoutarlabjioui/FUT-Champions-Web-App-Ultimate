<?php
$servername="db";
$db_username="myuser";
$db_pass="mypassword";
$db_name="fut_ult";



$db_connt= mysqli_connect($servername,$db_username , $db_pass, $db_name);
if (!$db_connt){
    echo "404";
}

?>

