// Get the dropdown menu and description box elements from the HTML document
var instructions_dropdown = document.getElementById("InfoDropdown");
var instructions_box = document.getElementById("InfoDesription");

// Define a function to update the instructions displayed in the description box
function UpdateInstructions()
{
    // Set the inner HTML of the description box to the selected value in the dropdown menu
    instructions_box.innerHTML = instructions_dropdown.value;
}
