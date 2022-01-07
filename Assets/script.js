let dateDisplay = $("#currentDay")


function getTime(){
    setInterval(function(){
        let currentDay = moment().format("MMM Do YYYY");
        let currentTime = moment().format("h:mm:ss a");
        dateDisplay.text( "It's currently " + currentTime + " on " + currentDay ); 
    }, 1000)
};

getTime();