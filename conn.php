<?php

$conn = mysqli_connect("localhost", "root"," ","healthrecs");//Use the mysql_connect function to connect to the server. Supply your hostname, username and password as shown.
or die (mysqli_error()); // if theres an error, end the script and display the error message.

mysqli_select_db("records") // select the database
or die ("Database selection incorrect");

?>