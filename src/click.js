function playSound(sfx) {
    sfx = sfx.cloneNode();
    sfx.pause();
    sfx.load();
    sfx.play();
}
function CalculateBurgersPerClick() {
    let adburgers = 1 * (bonusBurgers + 1);
    adburgers *= squareBurger * squareBurger + 1;
    return adburgers;
}
function OnClick_Burger() {
    playSound(sfx_click)
    Burgers += CalculateBurgersPerClick();
    
}
function OnClick_SquareBurger() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(25000, squareBurger)
        let ncost = CalculateCost(25000, squareBurger + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            squareBurger += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BurgerGun() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(50000, burgerGun)
        let ncost = CalculateCost(50000, burgerGun + 1)
        if (Burgers >= cost) {
            playSound(sfx_shoot)
            Burgers -= cost;
            burgerGun += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Employee() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(25, employees)
        let ncost = CalculateCost(25, employees + 1)
        if (Burgers >= cost) {
            playSound(sfx_scream)
            Burgers -= cost;
            employees += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Microwave() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(250, microwaves)
        let ncost = CalculateCost(250, microwaves + 1)
        if (Burgers >= cost) {
            playSound(sfx_microwave)
            Burgers -= cost;
            microwaves += 1;
            
            Update_Text();
        }
    }
}
function OnClick_Factory() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(1250, factories)
        let ncost = CalculateCost(1250, factories + 1)
        if (Burgers >= cost) {
            playSound(sfx_factory)
            Burgers -= cost;
            factories += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BonusBurger() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(50, bonusBurgers)
        let ncost = CalculateCost(50, bonusBurgers + 1)
        if (Burgers >= cost) {
            Burgers -= cost;
            bonusBurgers += 1;
            
            Update_Text();
        }
    }
}
function OnClick_BurgerFabricator() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(10000, burgerFabricator);
        let ncost = CalculateCost(10000, burgerFabricator + 1);
        if (Burgers > cost) {
            playSound(sfx_fabricator)
            Burgers -= cost;
            burgerFabricator += 1;
            
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