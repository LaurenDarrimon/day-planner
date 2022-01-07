//declare DOM variables
let $dateDisplay = $("#currentDay");
let $saveBtn = $(".saveBtn");

let textAreaElement; 
let toDoListItem;

//declare a DOM variable array that will point to all of our time slot text areas
let $timeSlotTextArray = [
    $("#8"), 
    $("#9"), 
    $("#10"), 
    $("#11"), 
    $("#12"),
    $("#13"), 
    $("#14"), 
    $("#15"), 
    $("#16"), 
];

//display current date and time in jumbotron
function getTime(){
    setInterval(function(){
        let currentDay = moment().format("MMM Do YYYY");
        let currentTime = moment().format("h:mm:ss a");
        $dateDisplay.text( "It's currently " + currentTime + " on " + currentDay ); 
    }, 1000)
};

//display past, present and future hours in different colors
function pastPresentFuture(){

    //set the whole function within an Interval so that it will continuously update
    setInterval(function(){

    //get current hour in 24 hour format
    let currentHour = moment().format("k");

    currentHour = 12; //for testing during off business hours. 

    //write a for loop to look through all the rows within the container
        for (i=0; i<$timeSlotTextArray.length; i++){

            //compare the current hour to the index position of the array (shifted by 8, to make the index position match the hour of the day)  
            if ( i + 8 < currentHour){
                $timeSlotTextArray[i].addClass("past");
                //if the row is less than current hour, add class past 
            } else if ( i + 8 === currentHour ){
                $timeSlotTextArray[i].addClass("present");
                //else if the row is equal to current hour, add class present
            } else{ 
                $timeSlotTextArray[i].addClass("future");
                //else if the row is greater than the current hour, add class future
            }
        }
    }, 1000)
}

// declare function to save text item from text area to local storage
function saveToDoItem(event) {
    event.preventDefault(); //stop page refresh

    let buttonClicked = event.target //point to the button clicked 

    textAreaElement = buttonClicked.previousElementSibling.id; //get the id tag of the adjacent text area

    toDoListItem = buttonClicked.previousElementSibling.value;
    //find the button's previous sibling and store the value of it. 

    storeToDoItem(toDoListItem); //pass the item name to the stoarge function
}

// store the current todo list item that was clicked inlocal stoarge with a key of the hour
function storeToDoItem(item) {
   localStorage.setItem(textAreaElement, item)
}

//for every textarea element, if there is a key in local storage that matches the id tag, then change the text of the text area
function displayPastItems() {

    for (i=0; i < $timeSlotTextArray.length; i++){

        let pastToDoListItem = localStorage.getItem(i+8); //array index plus 8 is the hour, and the id of the text area 

        console.log(pastToDoListItem); 

        let textAreaID = $timeSlotTextArray[i]; //point to the id of the text area we need to fill 

        if(pastToDoListItem){
            console.log(textAreaID)
            textAreaID.attr("placeholder", pastToDoListItem); //change the placeholder attibute the to stored todolist item string 
        }
    }
}

getTime(); 

pastPresentFuture();

displayPastItems();

//when user submits text area, run save Item function 
$saveBtn.on('click', saveToDoItem);