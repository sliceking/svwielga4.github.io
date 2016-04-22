<style>
    a{
        text-decoration: none;
        color: #515151;
    }
    .header_list{
        list-style-type: none;
        position:relative;
    }
    .header_list li{
        display:inline-block;
        margin:0 15px;
    }
    .header_list span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    a:hover{
        color: #d42551;
    }
    .header_div{
        display: inline-block;
    }
    .header_box{
        width:1000px;
        height:72px;
        background-color:#fffabe;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }

</style>

<div class="header_box">
    <div class="header_div">
        <img src="assets/images/logo.png"/>
    </div>
    <div class="header_div">
        <ul class="header_list">
            <li>
                <span><a href="?page=welcome">WELCOME</a></span>
            </li>
            <li>
                <span><a href="?page=our_macarons">OUR MACARONS</a></span>
            </li>
            <li>
                <span><a href="?page=gifts">GIFTS & PARTIES</a></span>
            </li>
            <li>
                <span><a href="?page=contact">CONTACT</a></span>
            </li>
        </ul>
    </div>
</div>