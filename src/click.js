function playSound(sfx)
{
    sfx = sfx.cloneNode();
    sfx.pause();
    sfx.load();
    sfx.play();
}
function CalculateBurgersPerClick()
{
    let adburgers = 1*(bonusBurgers+1);
    adburgers *= squareBurger*squareBurger+1;
    return adburgers;
}
function OnClick_Burger()
{
    playSound(sfx_click)
    Burgers += CalculateBurgersPerClick();
    Update_BurgerCounter();
}
function OnClick_SquareBurger()
{
    let cost = CalculateCost(25000,squareBurger)
    let ncost = CalculateCost(25000,squareBurger+1)
    if(Burgers >= cost)
    {
        Burgers -= cost;
        squareBurger += 1;
        Update_BurgerCounter();
        document.getElementById("SquareBurgerCounter").innerHTML = ncost + "B " + squareBurger + " Square Burgers";
    }
}
function OnClick_BurgerGun()
{
    let cost = CalculateCost(50000,burgerGun)
    let ncost = CalculateCost(50000,burgerGun+1)
    if(Burgers >= cost)
    {
        playSound(sfx_shoot)
        Burgers -= cost;
        burgerGun += 1;
        Update_BurgerCounter();
        document.getElementById("BurgerGunCounter").innerHTML = ncost + "B " + burgerGun + " Burger Gun";
    }
}
function OnClick_Employee()
{
    let cost = CalculateCost(25,employees)
    let ncost = CalculateCost(25,employees+1)
    if(Burgers >= cost)
    {
        playSound(sfx_scream)
        Burgers -= cost;
        employees += 1;
        Update_BurgerCounter();
        document.getElementById("EmployeeCounter").innerHTML = ncost + "B " + employees + " Employees";
    }
}
function OnClick_Microwave()
{
    let cost = CalculateCost(250,microwaves)
    let ncost = CalculateCost(250,microwaves+1)
    if(Burgers >= cost)
    {
        playSound(sfx_microwave)
        Burgers -= cost;
        microwaves += 1;
        Update_BurgerCounter();
        document.getElementById("MicrowaveCounter").innerHTML = ncost + "B " + microwaves + " Microwaves";
    }
}
function OnClick_Factory()
{
    let cost = CalculateCost(1250,factories)
    let ncost = CalculateCost(1250,factories+1)
    if(Burgers >= cost)
    {
        playSound(sfx_factory)
        Burgers -= cost;
        factories += 1;
        Update_BurgerCounter();
        document.getElementById("FactoryCounter").innerHTML = ncost + "B " + factories + " Factories";
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
        document.getElementById("BurgerBurgerCounter").innerHTML = ncost + "B " + bonusBurgers + " Bonus Burgers";
    }
}
function OnClick_BurgerFabricator()
{
    let cost = CalculateCost(10000, burgerFabricator);
    let ncost = CalculateCost(10000,burgerFabricator+1);
    if(Burgers > cost)
    {
        playSound(sfx_fabricator)
        Burgers -= cost;
        burgerFabricator += 1;
        Update_BurgerCounter();
        document.getElementById("BurgerFabricatorCounter").innerHTML = ncost + "B " + burgerFabricator + " Burger Fabricators";
    }
}