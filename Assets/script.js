//declare DOM variables
let $dateDisplay = $("#currentDay");
let saveBtn = $(".saveBtn");



//display current date and time in jumbotron
function getTime(){
    setInterval(function(){
        let currentDay = moment().format("MMM Do YYYY");
        let currentTime = moment().format("h:mm:ss a");
        $dateDisplay.text( "It's currently " + currentTime + " on " + currentDay ); 
    }, 1000)
};

//declare a DOM variable array that will point to all of our time slot rows
let $timeSlotRowArray = [
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

//display past, present and future hours in different colors
function pastPresentFuture(){

    //set the whole function within an Interval so that it will continuously update
    setInterval(function(){

    //get current hour in 24 hour format
    let currentHour = moment().format("k");

    currentHour = 12; //for testing during off business hours. 

    //write a for loop to look through all the rows within the container
        for (i=0; i<$timeSlotRowArray.length; i++){

            //compare the current hour to the index position of the array (shifted by 8, to make the index position match the hour of the day)  
            if ( i + 8 < currentHour){
                $timeSlotRowArray[i].addClass("past");
                //if the row is less than current hour, add class past 
            } else if ( i + 8 === currentHour ){
                $timeSlotRowArray[i].addClass("present");
                //else if the row is equal to current hour, add class present
            } else{ 
                $timeSlotRowArray[i].addClass("future");
                //else if the row is greater than the current hour, add class future
            }
        }
    }, 1000)
}





// declare function to save text item from text area to local storage
function saveToDoItem(event) {
    event.preventDefault(); //stop page refresh

    let buttonClicked = event.target //point to the button clicked 

    let toDoListItem = buttonClicked.previousElementSibling.value;
    //find the button's previous sibling and store the value of it. 
    console.log(toDoListItem)

    
    
    

    displayToDoItem();

}

// displaying the todo list item
function displayToDoItem() {
    
console.log("display item is running")
    


}

getTime();

pastPresentFuture();

//when user submits text area, run save Item function 
saveBtn.on('click', saveToDoItem);