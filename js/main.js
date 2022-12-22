console.log("V 0.1.8")

// Declare a variable to store the number of burgers
var Burgers = 0;

// Get the element with the ID "Burger"
const burger = document.getElementById("Burger")

// Declare variables for various in-game items/stats
var BPS = 0 // Burgers per second
var employees = 0
var microwaves = 0
var factories = 0
var bonusBurgers = 0
var burgerFabricator = 0
var squareBurger = 0
var burgerGun = 0
var burgerBot = 0
var time_sense_last_update = 0

// Declare variables for audio files
var sfx_click = new Audio("sfx/click.wav")
var sfx_scream = new Audio("sfx/BurgerGuyScreamB.wav")
var sfx_bot = new Audio("sfx/BurgerBot.wav")
var sfx_shoot = new Audio("sfx/shoot.wav")
var sfx_factory = new Audio("sfx/Factory.wav")
var sfx_microwave = new Audio("sfx/microwave.wav")
var sfx_fabricator = new Audio("sfx/Fabricator.wav")
var sfx_pop = new Audio("sfx/Pop.wav")

//Define a function to add commas to number
function SimplifyNumber(number)
{
    return number.toLocaleString();
}


// Define a function to update the text displayed on the page
function Update_Text()
{
    // Get the value selected in the "selectNum" element
    let x = Number(document.getElementById('selectNum').value);

    // Update the text for the number of burgers
    document.getElementById("BurgerTextCounter").innerHTML = SimplifyNumber(Math.floor(Burgers)) + " Burgers";

    // Update the text for the burgers per second (BPS) and burgers per click (BPC)
    document.getElementById('bps').innerHTML = `${BPS} BPS ${CalculateBurgersPerClick()} BPC`;

    // Update the text for the number of square burgers
    let ncost = CalculateCost(25000,squareBurger,x)
    document.getElementById("SquareBurgerCounter").innerHTML = SimplifyNumber(ncost) + "B " + squareBurger + " Square Burgers";

    // Update the text for the number of burger guns
    ncost = CalculateCost(100000,burgerGun,x)
    document.getElementById("BurgerGunCounter").innerHTML = SimplifyNumber(ncost) + "B " + burgerGun + " Burger Guns";

    // Update the text for the number of employees
    ncost = CalculateCost(25,employees,x)
    document.getElementById("EmployeeCounter").innerHTML = SimplifyNumber(ncost) + "B " + employees + " Employees";

    // Update the text for the number of microwaves
    ncost = CalculateCost(250,microwaves,x)
    document.getElementById("MicrowaveCounter").innerHTML = SimplifyNumber(ncost) + "B " + microwaves + " Microwaves";

    // Update the text for the number of factories
    ncost = CalculateCost(2500,factories,x)
    document.getElementById("FactoryCounter").innerHTML = SimplifyNumber(ncost) + "B " + factories + " Factories";

    // Update the text for the number of bonus burgers
    ncost = CalculateCost(50,bonusBurgers,x)
    document.getElementById("BurgerBurgerCounter").innerHTML = SimplifyNumber(ncost) + "B " + bonusBurgers + " Bonus Burgers";

    // Update the text for the number of burger fabricators
    ncost = CalculateCost(50000,burgerFabricator,x);
    document.getElementById("BurgerFabricatorCounter").innerHTML = SimplifyNumber(ncost) + "B " + burgerFabricator + " Burger Fabricators";

    // Update the text for the number of burger bots
    ncost = CalculateCost(2500000,burgerBot,x);
    document.getElementById("BurgerBotCounter").innerHTML = SimplifyNumber(ncost) + "B " + burgerBot + " Burger Bots";
}


// Define a function to calculate the cost of purchasing a certain number of buildings
function CalculateCost(basecost, numberOfBuildings, number=1)
{
    // Initialize the cost to 0
    let n = 0;

    // Loop through the number of buildings being purchased
    for (let i = 0; i < number; i++) {
        // Add the cost of the building to the total cost
        n += Math.floor(basecost * (1 + ((numberOfBuildings + i) * 1.35)));
    }

    // Return the total cost
    return n;
}

// Define a function to delete the player's save data
function DeleteSave()
{
    // Prompt the player to confirm the delete action
    if (confirm('Are you sure you want to delete your save?')) {
        if (confirm('Are you really sure though?')) {
            clearInterval(refresh);
            localStorage.clear();
            window.location.reload();
        }
    }
}

// Define the update function, which runs 60 times per second
function Step()
{
    let delta_time = (Date.now()-time_sense_last_update)/33
    console.log(delta_time)
    // Call the function to update the pedestrians on the screen
    UpdatePedestrians();
    // Call the function to update the instructions text
    UpdateInstructions();
    // Call the function to update the text on the screen
    Update_Text();

    // Initialize a variable to keep track of the number of burgers per second
    let adburger = 0;

    // Add the contribution of each type of building to the BPS
    adburger += employees;
    adburger += microwaves * (5 + employees / 5);
    adburger += factories * (150 * employees / 15);
    adburger += burgerFabricator * (1000 + (factories * 50));
    adburger += burgerGun * (5000);
    adburger += burgerBot * (13503.9 * 10);

    // Round the BPS to one decimal place
    BPS = Math.round(adburger * 10) / 10;
    // Divide the BPS by the number of updates per second to get the number of burgers per update
    adburger /= (30/delta_time);
    // Add the number of burgers per update to the total number of burgers
    Burgers += adburger;
    // Update the text on the screen to show the BPS and BPC
    document.getElementById('bps').innerHTML = `${SimplifyNumber(BPS)} BPS ${SimplifyNumber(CalculateBurgersPerClick())} BPC`;
    time_sense_last_update = Date.now();
}

// Define a function to generate and save the player's game data
function Step1()
{
    // Call the function to generate the save data
    GenerateSave();
}

// Define an empty function
function Step3()
{
    // This function currently does nothing
    // If there are fewer pedestrians on the screen than the number of employees, and the total number of pedestrians is less than 256,
    if (Pedestrians.length < employees && Pedestrians.length < 256 && Math.random()>0.9)
        // call the function to spawn a new pedestrian
        SpawnPedestrian();
}

// Define an empty function
function Step2()
{
    // This function currently does nothing
}

// Check if there is a save data in local storage
if (localStorage.getItem('save')) {
    // If there is, import the save data
    ImportSave(localStorage.getItem('save'));
}

// Set an interval to call the update function (Step) every 16 milliseconds
let refresh = setInterval(Step, 33);
// Set an interval to call the Step1 function every 5 seconds
setInterval(Step1, 5000);
// Set an interval to call the Step3 function every second
setInterval(Step3, 1000);
// Set an interval to call the Step2 function every half second
setInterval(Step2, 500);
