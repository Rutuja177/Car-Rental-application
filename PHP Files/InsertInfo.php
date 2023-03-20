<?php
  $conn = mysqli_connect("localhost","root","");
  $database = mysqli_select_db($conn, "carrental");

  $custName = $_POST['Name'];
  $custPhone = $_POST['Phone'];

  #Insert Customer Data
  $insertCust = "INSERT INTO customer(Name, Phone) VALUES ('$custName','$custPhone')";

  $Result = mysqli_query($conn, $insertCust);

  if($Result){
      $Message = "Customer data is inserted successfully.";

  }
  else {
      $Message = "Server Error.. Please Try latter.";
  }
  echo($Message);
  
 
 


?>


