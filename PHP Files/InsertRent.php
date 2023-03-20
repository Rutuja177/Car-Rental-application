<?php
 $conn = mysqli_connect("localhost","root","");
 $database = mysqli_select_db($conn, "carrental");

 $custId = $_POST['CustomerID'];
 $startDate = $_POST['StartDate'];
 $OrderDate = $_POST['OrderDate'];
 $Category = $_POST['Category'];
 $Type = $_POST['Type'];
 $RentalType = $_POST['RentalType'];
 $Qty = $_POST['Quantity'];
 $ReturnDate = $_POST['ReturnDate'];
 #$PayNow= $_POST['PayNow']
 #$PayLater=$_POST['PayLater']
 
 #getVehicleId
 $getVehicleId = "SELECT rental.VehicleID FROM rental JOIN vehicle on vehicle.VehicleID = rental.VehicleID
 WHERE vehicle.Type = '".$Type."' AND vehicle.Category = '".$Category."' AND rental.Returned = 1 LIMIT 1 " ;

$result2 = mysqli_query($conn, $getVehicleId);
$row = mysqli_fetch_row($result2); 
//echo $row;

 #Insert Rental info
 $insertRental = "INSERT INTO rental (CustID, VehicleID, StartDate, OrderDate, RentalType, Qty, ReturnDate)
                VALUES ('".$custId."','".$row[0]."','".$startDate."','".$OrderDate."','".$RentalType."','".$Qty."','".$ReturnDate."')";
 $result3 = mysqli_multi_query($conn, $insertRental);
 
 $updateTotalAmount = "UPDATE rental SET rental.TotalAmount=
 CASE
 WHEN $Type = 1 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*480
 WHEN $Type = 1 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*80
 WHEN $Type = 1 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*600
 WHEN $Type = 1 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*105

 WHEN $Type = 2 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*530
 WHEN $Type = 2 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*90
 WHEN $Type = 2 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*660
 WHEN $Type = 2 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*116

 WHEN $Type = 3 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*600
 WHEN $Type = 3 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*100
 WHEN $Type = 3 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*710
 WHEN $Type = 3 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*126

 WHEN $Type = 4 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*685
 WHEN $Type = 4 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*115
 WHEN $Type = 4 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*800
 WHEN $Type = 4 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*142

 WHEN $Type = 5 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*780
 WHEN $Type = 5 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*130
 WHEN $Type = 5 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*685
 WHEN $Type = 5 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*115

 WHEN $Type = 6 AND $Category = 0 AND rental.RentalType= 7 THEN rental.Qty*900
 WHEN $Type = 6 AND $Category = 0 AND rental.RentalType= 1 THEN rental.Qty*150
 WHEN $Type = 6 AND $Category = 1 AND rental.RentalType= 7 THEN rental.Qty*800
 WHEN $Type = 6 AND $Category = 1 AND rental.RentalType= 1 THEN rental.Qty*135

 END";

 
$result4 = mysqli_multi_query($conn, $updateTotalAmount);

if ($result4) {
    echo "Success";
}
else
{
    echo "No Success";
}

if ($_POST['PayNow'])  {
    $updatePaymentDate= "UPDATE rental SET rental.PaymentDate = '".$ReturnDate."', rental.Returned = 1";
    mysqli_query($conn, $updatePaymentDate);
}
else ($_POST['PayLater']){
    $updatePaymentDateNull= "UPDATE rental SET rental.PaymentDate = NULL, rental.Returned = 0"
    mysqli_query($conn, $updatePaymentDateNull);
}

?>