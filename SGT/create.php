<?php
    require('mysql_connect.php');
    $name = trim(filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING));
    $course = trim(filter_input(INPUT_POST,'course',FILTER_SANITIZE_STRING));
    $grade = trim(filter_input(INPUT_POST,'grade',FILTER_SANITIZE_NUMBER_INT));
    $teacher_id = trim(filter_input(INPUT_POST,'teacher_id',FILTER_SANITIZE_NUMBER_INT));
    $query="INSERT INTO `students` SET `name`='$name', `course`='$course', `grade`='$grade', `teacher_id`='$teacher_id'";
    $api_key = trim(filter_input(INPUT_POST,'api_key',FILTER_SANITIZE_STRING));
    $api_check = "SELECT * FROM `teachers`";
    $check = mysqli_query($conn,$api_check);
    while($api = mysqli_fetch_assoc($check)){
        $key['api'][]=$api['api_key'];
    }
    foreach($key['api'] as $whateva){
        if($api_key == $whateva){
            if($name == '' || $course == '' || $grade == ''){
                $data = ['success' => false, 'error' => 'Please fill out all input values'];
                $data = json_encode($data);
                print_r($data);
                exit();
            }elseif($grade < 0 || $grade > 100){
                $data = ['success' => false, 'error' => 'Please fill out a grade between 0-100'];
                $data = json_encode($data);
                print_r($data);
                exit();
            }
            mysqli_query($conn,$query);
            if(mysqli_affected_rows($conn)){
                $data = ['success' => true, 'id' => mysqli_insert_id($conn)];
            }
            $data = json_encode($data);
            print_r($data);
            exit();
        }
    }
    //$query="INSERT INTO `students` SET `name`='red killer', `course`='water drinking', `grade`='4', `teacher_id`='1'";
    //print_r($query);
    //printf("<br>". "affected rows: " . mysqli_affected_rows($conn));
    //echo mysqli_affected_rows($conn);
    //mysqli_close($conn);
    //echo mysqli_insert_id($conn);
//    $data = ['success' => false];
//    if(mysqli_affected_rows($conn)){
//        $data = ['success' => true, 'id' => mysqli_insert_id($conn)];
//    }
    $data = ['success' => false, 'error' => 'bad api key'];
    $data = json_encode($data);
    print_r($data);

?>