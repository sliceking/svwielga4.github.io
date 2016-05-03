<?php
$page=null;
if(empty($_GET['page']) || $_GET['page'] == 'welcome'){
    $page = 'welcome';
}elseif($_GET['page'] == 'our_macarons'){
    $page = 'our_macarons';
}elseif($_GET['page'] == 'gifts'){
    $page = 'gifts';
}elseif($_GET['page'] == 'contact'){
    $page = 'contact';
}else{
    $page = 'welcome';
}
?>
<DOCTYPE html>
    <html>
        <head>
            <title>MBoutique. Macaron Extrodinare.</title>
            <style>
                .container{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                }
                h1{
                    margin:50px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <?php
                    include('header.php');
                    include("$page.php");
                    include('footer.php');
                ?>
            </div>
        </body>
    </html>