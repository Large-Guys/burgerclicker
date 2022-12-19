console.log("V 0.1.8")
var Burgers = 0;
const burger = document.getElementById("Burger")

var BPS = 0
var employees = 0
var microwaves = 0
var factories = 0
var bonusBurgers = 0
var burgerFabricator = 0
var squareBurger = 0
var burgerGun = 0
var sfx_click = new Audio("sfx/click.wav")
var sfx_scream = new Audio("sfx/BurgerGuyScreamB.wav")
var sfx_shoot = new Audio("sfx/shoot.wav")
var sfx_factory = new Audio("sfx/Factory.wav")
var sfx_microwave = new Audio("sfx/microwave.wav")
var sfx_fabricator = new Audio("sfx/Fabricator.wav")

function SimplifyNumber(number)
{
    return number.toLocaleString();
}

function Update_Text()
{
    document.getElementById("BurgerTextCounter").innerHTML = SimplifyNumber(Math.floor(Burgers)) + " Burgers";
    document.getElementById('bps').innerHTML = `${BPS} BPS ${CalculateBurgersPerClick()} BPC`;
    let ncost = CalculateCost(25000,squareBurger)
    document.getElementById("SquareBurgerCounter").innerHTML = SimplifyNumber(ncost) + "B " + squareBurger + " Square Burgers";
    ncost = CalculateCost(50000,burgerGun)
    document.getElementById("BurgerGunCounter").innerHTML = SimplifyNumber(ncost) + "B " + burgerGun + " Burger Gun";
    ncost = CalculateCost(25,employees)
    document.getElementById("EmployeeCounter").innerHTML = SimplifyNumber(ncost) + "B " + employees + " Employees";
    ncost = CalculateCost(250,microwaves)
    document.getElementById("MicrowaveCounter").innerHTML = SimplifyNumber(ncost) + "B " + microwaves + " Microwaves";
    ncost = CalculateCost(1250,factories)
    document.getElementById("FactoryCounter").innerHTML = SimplifyNumber(ncost) + "B " + factories + " Factories";
    ncost = CalculateCost(50,bonusBurgers)
    document.getElementById("BurgerBurgerCounter").innerHTML = SimplifyNumber(ncost) + "B " + bonusBurgers + " Bonus Burgers";
    ncost = CalculateCost(10000,burgerFabricator);
    document.getElementById("BurgerFabricatorCounter").innerHTML = SimplifyNumber(ncost) + "B " + burgerFabricator + " Burger Fabricators";
}

function CalculateCost(basecost,numberOfBuildings)
{
    return Math.floor(basecost*(1+(numberOfBuildings*1.15)))
}

function DeleteSave()
{
    //if(prompt("ARE YOU SURE (type yes or no)","no")=="yes")
}

//Update function (60 times per second)
function Step()
{
    UpdateInstructions();
    Update_Text()
    let adburger = 0
    adburger += employees;
    adburger += microwaves*(5+employees/5);
    adburger += factories*(150*employees/15)
    adburger += burgerFabricator*(1000+(factories*50));
    BPS = Math.round(adburger*10)/10;
    adburger/=60;
    Burgers += adburger;
    GenerateSave();
    document.getElementById('bps').innerHTML = `${SimplifyNumber(BPS)} BPS ${SimplifyNumber(CalculateBurgersPerClick())} BPC`;
}
function Step1()
{
    for (let i = 0; i < burgerGun; i++) 
    {
        if(employees > 10)
        {
            employees -= 1;
            Burgers += 10000;
        }
    }
    let ncost = CalculateCost(25,employees)
    document.getElementById("EmployeeCounter").innerHTML = SimplifyNumber(ncost) + "B " + employees + " Employees";
}

//Load Save from local storage if it exists.
if(localStorage.getItem('save')){
    ImportSave(localStorage.getItem('save'))
}

setInterval(Step, 16);
setInterval(Step1,5000);