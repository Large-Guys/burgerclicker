var instructions_dropdown = document.getElementById("InfoDropdown");
var instructions_box = document.getElementById("InfoDesription");

function UpdateInstructions()
{
    instructions_box.innerHTML = instructions_dropdown.value;
}