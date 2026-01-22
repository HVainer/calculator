

let display = document.querySelector("#display-calc");

display.textContent = "0"; //default display is zero

const numbButtons = document.querySelectorAll("[data-digit]"); //reference to numb buttons

const opButtons = document.querySelectorAll("[data-operator]"); //reference to operator buttons

const equals = document.querySelector("[date-equals]"); //reference to equals button

equals.addEventListener('click', () => { //adds a click event and will call the appendToDisplay() sending in the "=" value
    appendToDisplay(button.dataset.equals);
});

numbButtons.forEach(button =>{ //will iterate thru each number button
     button.addEventListener('click', () => { //adds an event listener to ea button
        appendToDisplay(button.dataset.digit); //calls the appendToDisplay() at ea click and send the value of that button
     });
    });

    //does same as above but for operator buttons
opButtons.forEach(button =>{
     button.addEventListener('click', () => {
        appendToDisplay(button.dataset.operator);
     });
    });



function appendToDisplay(value) //will add ea digit clicked to the display
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

