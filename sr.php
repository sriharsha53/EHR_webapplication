<?php

$sea=$_POST['search'];
if(!isset($sea)){
  header("Location:index.php");
}
if(isset($sea)){
  $mysqli = mysqli_connect("localhost","root","","drugs");
  $table=mysqli_select_db($mysqli,'searchdrug');
$search_sql="SELECT * FROM searchdrug WHERE name LIKE '%".$sea."%'";
$search_query=mysqli_query($mysqli,$search_sql);

}



?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>EHR</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="carousel.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Electronic Health Recordss</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li ><a href="index.html">Home</a></li>
                <li><a href="#myhealthrecord">My Health Record</a></li>
                <li><a href="book.html">Book appointment</a></li>
                <li class="active"><a href="#drugs">Find Drugs</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
   <!-- <img src="images/dugpage.jpg" id="bg" alt="drugpage">-->
    <div class="container">
  <div class="row">
    <form name="form1" method="post" action="http://localhost/searchresults.php">
        <div class="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container1"> 
                <div class="input-group stylish-input-group">
                    <input type="text" name="search" class="form-control"  placeholder="Enter Drug name" >
                    <span class="input-group-addon">
                        <button type="submit" name="Submit" value="Search">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                </div>
            </div>
        </div>
      </form>
  </div>
  <div class="result">
  <h4>Search Results:</h4>
  <?php if(mysqli_num_rows($search_query)!=0){
    while($search_rs=mysqli_fetch_assoc($search_query)){ ?>
    <h2> Drug Name: </h2>
    <h3><?php echo $search_rs['name']; ?></h3>
  </br></br>
  <h2> Drug description:</h2>
  <p><?php echo $search_rs['drug description']; ?></p>
  </br></br>
  <h2> Uses:</h2>
  <p> <?php echo $search_rs['uses'];?></p>
  </br></br>
  <h2> Dosage:</h2>
  <p> <?php echo $search_rs['dosage'];?></p>
  </br></br>
  <h2> Side Effects:</h2>
  <p> <?php echo $search_rs['side effects'];?></p>
  </br></br>
  <h2> Alternatives:</h2>
  <p> <?php echo $search_rs['alternatives'];?></p>
  </br></br>
<?php };


  } else{
    echo "No results found";
  }
  ?>
</div>
</div>
  </body>