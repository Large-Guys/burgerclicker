function playSound(sfx) {
    sfx.pause();
    sfx.load();
    sfx.play();
}
function playCloneSound(sfx) {
    if(sfx!=null && sfx!=undefined){
        let nsfx = sfx.cloneNode();
        nsfx.pause();
        nsfx.load();
        nsfx.play();
    }
}
function CalculateBurgersPerClick() {
    let adburgers = 1 * (bonusBurgers + 1);
    adburgers *= squareBurger * squareBurger + 1;
    return adburgers;
}
function OnClick_Burger() {
    playCloneSound(sfx_click)
    totalBurgers += CalculateBurgersPerClick();
    Burgers += CalculateBurgersPerClick();
    
}
function OnClick_SquareBurger() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(250000, squareBurger)
        let ncost = CalculateCost(250000, squareBurger + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            squareBurger += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BurgerGun() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(200000, burgerGun) < Burgers) playSound(sfx_shoot);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(200000, burgerGun)
        let ncost = CalculateCost(200000, burgerGun + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            burgerGun += 1;
            
            Update_Text();
        }
    }
}
function OnClick_AlternateDimension()
{
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(200000, AlternateDimensions) < Burgers) playSound(sfx_shoot);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(1000000000, AlternateDimensions)
        let ncost = CalculateCost(1000000000, AlternateDimensions + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            AlternateDimensions += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Employee() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(25, employees) < Burgers) playSound(sfx_scream);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(25, employees)
        let ncost = CalculateCost(25, employees + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            employees += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BurgerBot() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(2500000, burgerBot) < Burgers) playSound(sfx_bot);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(2500000, burgerBot)
        let ncost = CalculateCost(2500000, burgerBot + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            burgerBot += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Microwave() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(250, microwaves) < Burgers) playSound(sfx_microwave);

    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(250, microwaves)
        let ncost = CalculateCost(250, microwaves + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            microwaves += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Factory() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(2500, factories) < Burgers) playSound(sfx_factory);

    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(2500, factories)
        let ncost = CalculateCost(2500, factories + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            factories += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BonusBurger() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(150, bonusBurgers)
        let ncost = CalculateCost(150, bonusBurgers + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            bonusBurgers += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BurgerFabricator() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(50000, burgerGun) < Burgers) playSound(sfx_fabricator);

    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(50000, burgerFabricator);
        let ncost = CalculateCost(50000, burgerFabricator + 1);
        if (Burgers > cost) {
            Burgers -= cost;
            burgerFabricator += 1;
            
            Update_Text();
        }
    }
}

function OnClick_HamburgerTree() {
    let x = Number(document.getElementById('selectNum').value);
    if(CalculateCost(50000000000, burgerGun) < Burgers) playSound(sfx_fabricator);

    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(50000000000, BurgerTree);
        let ncost = CalculateCost(50000000000, BurgerTree + 1);
        if (Burgers > cost) {
            Burgers -= cost;
            BurgerTree += 1;
            
            Update_Text();
        }
    }
}


function help() {
    document.getElementById('help').style.display = 'block';
}

function closeHelp() {
    document.getElementById('help').style.display = 'none';
}