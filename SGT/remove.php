<?php
    require('mysql_connect.php');
    $id = $_POST['id'];
    $query = "DELETE FROM `students` WHERE `id` = '$id'";
    $api_check = "SELECT * FROM `teachers`";
    $api_key = trim(filter_input(INPUT_POST,'api_key',FILTER_SANITIZE_STRING));
    $check = mysqli_query($conn,$api_check);
    $data = ['success' => false, 'error' => 'bad api key'];
    while($api = mysqli_fetch_assoc($check)){
        $key['api'][]=$api['api_key'];
    }
    foreach($key['api'] as $whateva){
        if($api_key == $whateva){
            mysqli_query($conn,$query);
            if(mysqli_affected_rows($conn)){
                $data=['success' => true];
                $data = json_encode($data);
                print_r($data);
                exit();
            }
        }
    }
    //print_r($query);
    //printf("<br>". "affected rows: " . mysqli_affected_rows($conn));
    //mysqli_close($conn);
    $data = json_encode($data);
    print_r($data);

?>