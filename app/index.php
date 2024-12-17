<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>bonjours depuis php</title>
</head>
<body class="text-center flex"> -->

<!-- // echo phpversion();
// $number=5;
// $txt="my name bahae labjioui hajjaj";
// echo $txt;
// var_dump($number);
// var_dump($txt);
// function test(){
//    global $number;
//     echo $number= $number+1;
// }
// test();
// echo $number;
// echo $txt;
// $arr1= array("nom"=>"bahae", "email"=>"bahaelab@gmail.com","password"=>"154783");
// $arr2=array("nom"=>"zakaria","email"=>"zakarialab@gamail.com","password"=>"123852a");
// $arr3=array("nom"=>"big boy", "email"=>"biggy@gmail.com","password"=>"147825h");
// $arr= array($arr1,$arr2,$arr3);
// function checkuser($email,$password){
//     global $arr;
//     foreach($arr as $value){
//         if ($value["email"]==$email && $value["password"]==$password) {
//             echo $value["nom"];
//         return;
//         }
//     }
//     echo "doesn't exist";
// }
// checkuser("bahaelab@gmail.com","1547");
// var_dump($arr);

 -->


<?php
 include 'db.php';
 if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $mobile=$_POST['mobile'];
    $password=$_POST['password'];

     $stmt = $db_connt->prepare("INSERT INTO cruds (fname,email,mobile,password) VALUES (?,?,?,?)");
    $stmt->bind_param("ssss",$name,$email,$mobile,$password);
    $stmt->execute();

    if ($stmt->execute()) {
        echo "Record added successfully!";
    } else {
        echo "Error: " ;
    }

 }
?>






<!doctype html>
<html lang="en" >
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css">

    <title>crud operation</title>
  </head>
  <body>
   <div class="container my-5">
   <form method="post" >
  <div class="form-group m-3">
    <label>Name</label>
    <input type="text" class="form-control"  placeholder="enter your name" name="name" autocomplete="off">
  </div>
  <div class="form-group m-3">
    <label>EMAIL</label>
    <input type="email" class="form-control"  placeholder="enter your email" name="email" autocomplete="off">
  </div>
  <div class="form-group m-3">
    <label>Mobile</label>
    <input type="text" class="form-control"  placeholder="enter your mobile number" name="mobile" autocomplete="off">
  </div>
  <div class="form-group m-3">
    <label>Password</label>
    <input type="text" class="form-control"  placeholder="enter your password" name="password" autocomplete="off">
  </div>
  <button type="submit" class="btn btn-primary m-3" name="submit">Submit</button>
</form>
   </div> 

 
  </body>
</html>















<!-- </body>
</html> -->