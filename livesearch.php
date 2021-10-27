<?php
include 'database.php';
//get the q parameter from URL
$music=$_GET["music"];

//lookup all links from the xml file if length of q>0
if (strlen($music)>0) {
  $get_song = mysqli_query($db, "SELECT * FROM songs WHERE songName LIKE '%$music%'");
    if(mysqli_num_rows($get_song) > 0){
        while ($song = mysqli_fetch_array($get_song)) {
          $hint = "<a href='index.php?song=".$song['ID']."' style='text-decoration: none; font-weight:bold; color:black;'>".$song['songName']."</h1>";
        }
    }else{
        $hint="";
    }
    
}

// Set output to "no suggestion" if no hint was found
// or to the correct values
if ($hint=="") {
  $response="No such music name that matche you search!!! 😢";
} else {
  $response=$hint;
}

//output the response
echo $response;
?>