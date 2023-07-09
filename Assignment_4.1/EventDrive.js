var mononoke = 5; // A global function that the other functions can use in this file
var change = 150;

function start() // controlls how the image will start with the use of the button
{
    document.getElementById("TheBegining").disabled = true; // will disable the start button
    document.getElementById("TheEnd").disabled = false; // will enable the stop button
    var image = document.getElementById("Princess"); // will bring the image to the page and link it to the JavaScript file

    mononoke = setInterval(function() // Tells the computer where you want the picture to go
    {
        factor = 15; 
        if(change >1120) // Will let the picture slide the set amount 
        {
            factor = -1120; // Will bring back the picture to the start
        }
        image.style.left = change + "px"; // Will move the picture to the left
        change +=factor; // Will have the picture bounce back with the help of the if function
    },150);
}

function stop() // Will stop the picture once the button is pressed 
{
    document.getElementById("TheEnd").disabled = true; // Will disable the stop button
    document.getElementById("TheBegining").disabled = false; // Will enable the start button

    clearInterval(mononoke); 
}