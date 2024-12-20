<?php
ob_start();
include 'db.php';

if(isset($_GET['deleteid'])){
$id = $_GET['deleteid'];

$sql="delete from players where id=$id";
$result=mysqli_query($db_connt,$sql);
if($result){
    echo 'palyer deleted';
}
}
header("location: display.php");
ob_end_flush();
?>