<?php
   
  $contact->first_name=( $_POST['first_name'], 'From');
  $contact->email=( $_POST['email'], 'Email');
  $contact->message=( $_POST['message'], 'Message', 10);

  $link = mysqli_connect("sql302.epizy.com","epiz_30483129","epiz_30483129_contact");



  if($link===false){
    die( 'Coming Soon');
  }
  echo "Connected successfully";
}

$sql="INSERT INTO contact(first_name,last_name,email,message) VALUES ('$name','$email','$message')"

  if(mysqli_query($link,$sql)){
    echo "Thank You!"
    echo "<div><a href= ' index.html' >Go Back</a></div>"
  }else {
echo "Sorry for Error,Please Try Again later " . mysqli_error($link);

  }
  mysqli_close($link);
?>
