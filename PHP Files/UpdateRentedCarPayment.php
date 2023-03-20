<?php
    $conn = mysqli_connect("localhost","root","");
    $database = mysqli_select_db($conn, "carrental");

    $custId = $_POST['CustomerID'];
    $ReturnDate = $_POST['ReturnDate'];
    #To show payment due with car information
    $PaymentDue="SELECT rental.CustID, rental.VehicleId, rental.StartDate,rental.ReturnDate, rental.TotalAmount FROM rental WHERE rental.CustID='".$custId."' AND rental.ReturnDat='".$ReturnDate."'";

    #Query under Pay Button
    $ReturnofRented = "UPDATE rental SET rental.PaymentDate='".$ReturnDate."',Returned='1' WHERE rental.CustID='".$custId."'";
        
    
?>