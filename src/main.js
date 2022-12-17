var Burgers = 0;
const burger = document.getElementById("Burger")

var BPS = 0
var employees = 0
var microwaves = 0
var factories = 0
var bonusBurgers = 0
var burgerFabricator = 0
var squareBurger = 0
function CalculateCost(basecost,numberOfBuildings)
{
    return Math.floor(basecost*(1+(numberOfBuildings*0.85)))
}
function Update_BurgerCounter()
{
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
}

//Update function (60 times per second)
function Step()
{
    UpdateInstructions();
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
    var adburger = 0
    adburger += employees;
    adburger += microwaves*(5+employees/5);
    adburger += factories*(150*employees/15)
    adburger += burgerFabricator*(1000+(factories*50));
    BPS = Math.round(adburger*10)/10;
    adburger/=60;
    Burgers += adburger;
    GenerateSave();
    document.getElementById('bps').innerHTML = `${BPS} BPS`;
}
setInterval(Step, 16);