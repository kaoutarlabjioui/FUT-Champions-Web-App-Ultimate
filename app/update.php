<?php
ob_start();

 include 'db.php';


$id = $_GET['updateid'];
 if(isset($_POST['submit'])){
    $pname=$_POST['name'];
    $photo=$_POST['photo'];
    $rating=$_POST['rating'];
    $position=$_POST['position'];
    $nation = $_POST['nationality'];
    $equipe = $_POST['equipe'];

    $sql="update players set id=$id , player_name  '$pname' ,photo= '$photo' , rating= '$rating'  ,position=  '$position' ,id_nationnalite= '$nation' ,id_equipe='$equipe'  where id=$id";

    //  $stmt = $db_connt->prepare("INSERT INTO cruds (fname,email,mobile,password) VALUES (?,?,?,?)");
    // $stmt->bind_param("ssss",$name,$email,$mobile,$password);
    // $stmt->execute();

    if (mysqli_query($db_connt,$sql)) {
        // unset($_POST);
        // var_dump($_POST['name']);
        echo "\n updated successfully!";
    } else {
        echo "Error: " ;
    }
        header("location: display.php");
 ob_end_flush();
 }
?>