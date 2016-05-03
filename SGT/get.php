<?php
    require("mysql_connect.php");
    $query = "SELECT * FROM `students`";
    $api_check = "SELECT * FROM `teachers`";
    $api_key = trim(filter_input(INPUT_POST,'api_key',FILTER_SANITIZE_STRING));
    $check = mysqli_query($conn,$api_check);
    $data = ['success' => false, 'error' => 'bad api key'];
    while($api = mysqli_fetch_assoc($check)){
        $key['api'][]=$api['api_key'];
    }
    //print_r($key);
    foreach($key['api'] as $whateva) {
        if ($api_key == $whateva) {
            $result = mysqli_query($conn, $query);
            if (!empty(mysqli_num_rows($result))) {
                $data = ['success' => true];
                while ($row = mysqli_fetch_assoc($result)) {
                    $data['data'][] = $row;
                    //printf('Name:' . $row['name'] . ' ' . '<br>' . 'Course: ' . $row['course'] . ' ' . '<br>' . 'Grade: ' . $row['grade'] . ' ' . '<br>' . 'Teacher: ' . $row['teacher_id']);
                    //echo '<br><br>';
                };
                //print_r($data);
                $data = json_encode($data);
                print_r($data);
                exit();
            };
        }
    }
    $data = json_encode($data);
    print_r($data);
    //print_r($result);
    //$row = mysqli_fetch_assoc($result);
    //print_r($row);

?>