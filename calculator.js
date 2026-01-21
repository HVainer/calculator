

let display = document.querySelector("#display-calc");

display.textContent = "0"; //default display is zero

const numbButtons = document.querySelectorAll("[data-digit]"); //reference to numb buttons

const opButtons = document.querySelector("[data-operator]"); //reference to operator buttons


function appendToDisplay(value)
{
    if(display.textContent.length === 1 && display.textContent === "0") //if it is just a zero in the display
    {
        display.textContent = value;
    }

    else 
    {
     display.textContent = display.textContent + value;
    }
}

