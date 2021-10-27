<?php
$msg = "";
try {
    $db = mysqli_connect('localhost','root','','music');
} catch (\Throwable $th) {
    $msg = "THIS PAGE IS NOT CONNECTED TO THE DATABASE";
}
echo $msg;
?>