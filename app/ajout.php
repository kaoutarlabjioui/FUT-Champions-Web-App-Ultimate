<?php
ob_start();

 include 'db.php';

 $pname=$_POST['name'];
 $photo=$_POST['photo'];
 $rating=$_POST['rating'];
 $position=$_POST['position'];
 $nation = $_POST['nationality'];
 $equipe = $_POST['equipe'];

 if(isset($_POST['submit'])){

    $sql="INSERT INTO players (player_name,photo,rating,position,id_nationnalite,id_equipe) VALUES ('$pname','$photo','$rating','$position','$nation','$equipe')";

    //  $stmt = $db_connt->prepare("INSERT INTO cruds (fname,email,mobile,password) VALUES (?,?,?,?)");
    // $stmt->bind_param("ssss",$name,$email,$mobile,$password);
    // $stmt->execute();

    if (mysqli_query($db_connt,$sql)) {
        unset($_POST);
        // var_dump($_POST['name']);
        echo "\n Record added successfully!";
    } else {
        echo "Error: " ;
    }
         header("location: display.php");
    ob_end_flush();
 }
?>