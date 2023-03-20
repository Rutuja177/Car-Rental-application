  <?php

  $conn = mysqli_connect("localhost","root","");
  $database = mysqli_select_db($conn, "carrental");

  $vehicleId = $_POST['VehicleID'];
  $vehicleDesc = $_POST['Description'];
  $vehicleYear = $_POST['Year'];
  $vehicleType = $_POST['Type'];
  $vehicleCat = $_POST['Category'];

  $insertVehicle = "INSERT INTO vehicle(VehicleID, Description, Year, Type, Category) VALUES ('$vehicleId', '$vehicleDesc', '$vehicleYear', '$vehicleType', '$vehicleCat')";

  $Result1 = mysqli_query($conn, $insertVehicle);

  if($Result1){
    $Message1 = "Vehicle data is inserted successfully.";

  }
  else {
    $Message1 = "Server Error.. Please Try latter.";
  }
  echo($Message1);

  ?>

