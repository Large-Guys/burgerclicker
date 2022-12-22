function playSound(sfx) {
    sfx.pause();
    sfx.load();
    sfx.play();
}
function playCloneSound(sfx) {
    let nsfx = sfx.cloneNode();
    nsfx.pause();
    nsfx.load();
    nsfx.play();
}
function CalculateBurgersPerClick() {
    let adburgers = 1 * (bonusBurgers + 1);
    adburgers *= squareBurger * squareBurger + 1;
    return adburgers;
}
function OnClick_Burger() {
    playCloneSound(sfx_click)
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
    let played_sound = false
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(100000, burgerGun)
        let ncost = CalculateCost(100000, burgerGun + 1)
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
function OnClick_BurgerBot() {
    let x = Number(document.getElementById('selectNum').value);
    for (let i = 0; i < x; i++) {
        let cost = CalculateCost(2500000, burgerBot)
        let ncost = CalculateCost(2500000, burgerBot + 1)
        if (Burgers >= cost) {
            playSound(sfx_bot)
            Burgers -= cost;
            burgerBot += 1;
            
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
        let cost = CalculateCost(2500, factories)
        let ncost = CalculateCost(2500, factories + 1)
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
        let cost = CalculateCost(50000, burgerFabricator);
        let ncost = CalculateCost(50000, burgerFabricator + 1);
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