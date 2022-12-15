var Burgers = 0;
const burger = document.getElementById("Burger")

var BPS = 0
var employees = 0
var microwaves = 0
var factories = 0
var bonusBurgers = 0
function CalculateCost(basecost,numberOfBuildings)
{
    return Math.floor(basecost*(1+(numberOfBuildings/2)))
}
function Update_BurgerCounter()
{
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
}
function OnClick_Burger()
{
    Burgers += 1*(bonusBurgers+1);
    Update_BurgerCounter();
}
function OnClick_Employee()
{
    let cost = CalculateCost(25,employees)
    let ncost = CalculateCost(25,employees+1)
    if(Burgers >= cost)
    {
        Burgers -= cost;
        employees += 1;
        Update_BurgerCounter();
        document.getElementById("EmployeeCounter").innerHTML = ncost + "$ " + employees + " Employees";
    }
}
function OnClick_Microwave()
{
    let cost = CalculateCost(250,microwaves)
    let ncost = CalculateCost(250,microwaves+1)
    if(Burgers >= cost)
    {
        Burgers -= cost;
        microwaves += 1;
        Update_BurgerCounter();
        document.getElementById("microwavesCounter").innerHTML = ncost + "$ " + microwaves + " microwavess";
    }
}
function OnClick_Factory()
{
    let cost = CalculateCost(1250,factories)
    let ncost = CalculateCost(1250,factories+1)
    if(Burgers >= cost)
    {
        Burgers -= cost;
        factories += 1;
        Update_BurgerCounter();
        document.getElementById("FactoryCounter").innerHTML = ncost + "$ " + factories + " factories";
    }
}
function OnClick_BonusBurger()
{
    let cost = CalculateCost(50,bonusBurgers)
    let ncost = CalculateCost(50,bonusBurgers+1)
    if(Burgers >= cost)
    {
        Burgers -= cost;
        bonusBurgers += 1;
        Update_BurgerCounter();
        document.getElementById("BurgerBurgerCounter").innerHTML = ncost + "$ " + bonusBurgers + " Bonus Burgers";
    }
}

//Update function (60 times per second)
function Step()
{
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
    var adburger = 0
    adburger += employees;
    adburger += microwaves*(5+employees/5);
    adburger += factories*(150*employees/20)
    adburger/=60;
    Burgers += adburger;
}
setInterval(Step, 16);