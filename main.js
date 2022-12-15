var Burgers = 0;
const burger = document.getElementById("Burger")

var BPS = 0
var employees = 0
var microwave = 0
var factorys = 0

function Burger()
{
    Burgers += 1;
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
}
function Employee()
{
    let cost = Math.floor(25*(1+(employees/4)))
    let ncost = Math.floor(25*(1+((employees+1)/4)))
    if(Burgers >= cost)
    {
        Burgers -= cost;
        employees += 1;
        document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
        document.getElementById("EmployeeCounter").innerHTML = ncost + "$ " + employees + " Employees";
    }
}
function Microwave()
{
    let cost = Math.floor(250*(1+(microwave/4)))
    let ncost = Math.floor(250*(1+((microwave+1)/4)))
    if(Burgers >= cost)
    {
        Burgers -= cost;
        microwave += 1;
        document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
        document.getElementById("MicrowaveCounter").innerHTML = ncost + "$ " + microwave + " Microwaves";
    }
}
function Factory()
{
    let cost = Math.floor(1250*(1+(factorys/4)))
    let ncost = Math.floor(1250*(1+((factorys+1)/4)))
    if(Burgers >= cost)
    {
        Burgers -= cost;
        factorys += 1;
        document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
        document.getElementById("FactoryCounter").innerHTML = ncost + "$ " + factorys + " Factorys";
    }
}
function Step()
{
    document.getElementById("BurgerTextCounter").innerHTML = Math.floor(Burgers) + " Burgers";
    var adburger = 0
    adburger += employees;
    adburger += microwave*(5+employees/5);
    adburger += factorys*(150*employees/20)
    adburger/=60;
    Burgers += adburger;
}
setInterval(Step, 16);