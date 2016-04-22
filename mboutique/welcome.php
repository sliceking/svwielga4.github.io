<style>

    .welcome_text{
        display: inline-block;
        width:70%;
        color:#6a6969;
        font-family: Arial, Helvetica, sans-serif;
    }
    .welcome_specials{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .welcome_specials ul{
        list-style-type: none;
        background-color: #fffabe;
        padding:0;
        margin:5px;
    }
    .welcome_specials li{
        width:120px;
        padding:5px;
        color:#6a6969;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 20px;
        font-size:14px;
        position:relative;
    }
    .welcome_specials img{
        position:absolute;
        right:5px;
    }
    .welcome_container{
        width:1000px;
    }
    .welcome_main{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>
<div>
    <div>
        <img src="assets/images/welcome-image.png"/>
    </div>
    <div>
        <div class="welcome_container">
            <div class="welcome_main">
                <img src="assets/images/macarons-image.png"/>
                <div class="welcome_text">
                    <h1>Welcome to MBoutique!</h1>
                    <p>We're a home-based baking business that specializes in the making of French macarons, a gluten-free pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011. Last year (2013) marked our third and final season of participation at the market. MBoutique was established to pay homage to the delicate French confectionery, the macaron. Our shop has been recognized as the connoisseurs of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.</p>
                    <h1>We love Macarons!</h1>
                    <p>Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and are brilliant  precisely because of their simplicity - a crist coating, but delicate in a loose blanket jam, chocolate butter cream is spread inviting.</p>
                    <p>Macarons combine perfectly with champagne or white wine, tea or hot chocolate, fresh juices and natural fruit flavored coffee and guarantee that these little delights soon become a friend that you can not break.</p>
                    <h1>Find the flavor that you like. Try a sample every day!</h1>
                </div>
            </div>
            <div class="welcome_specials">
                <ul>
                    <li>Monday</li>
                    <li>15:00 - 16:00</li>
                    <li>Chocolate <img src="assets/images/chocolate.png"/></li>
                    <li style="background-color: #824603; color:white">Coconut <img src="assets/images/coconut.png"/></li>
                </ul>
                <ul>
                    <li>Tuesday</li>
                    <li>14:00 - 15:00</li>
                    <li>Violet Cassis <img src="assets/images/violet-cassis.png"/></li>
                    <li>Green Tea <img src="assets/images/green-tea.png"/></li>
                </ul>
                <ul>
                    <li>Wednesday</li>
                    <li>09:00 - 10:00</li>
                    <li>Passion Fruit <img src="assets/images/passion-fruit.png"/></li>
                    <li style="background-color: #df5277; color:white">Vanilla <img src="assets/images/vanilla.png"/></li>
                </ul>
                <ul>
                    <li>Thursday</li>
                    <li>18:00 - 19:00</li>
                    <li>Coffee <img src="assets/images/coffee.png"/></li>
                    <li>Pistachio <img src="assets/images/pistachio.png"/></li>
                </ul>
                <ul>
                    <li>Friday</li>
                    <li>11:00 - 12:00</li>
                    <li>Raspberry <img src="assets/images/raspbery.png"/></li>
                    <li style="background-color: #a2304e; color:white">Lemon<img src="assets/images/lemon.png"/></li>
                </ul>
                <ul>
                    <li>Saturday</li>
                    <li>13:00 - 14:00</li>
                    <li>Rose <img src="assets/images/rose.png"/></li>
                    <li>Tiffany Blue <img src="assets/images/tiffany-blue.png"/></li>
                </ul>
                <ul>
                    <li>Sunday</li>
                    <li>10:00 - 11:00</li>
                    <li>Caramel <img src="assets/images/caramel.png"/></li>
                    <li style="background-color: #c39005; color:white">Almond <img src="assets/images/almond.png"/></li>
                </ul>
            </div>
        </div>
    </div>
</div>