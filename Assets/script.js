var currentDayText = $("#currentDay");
var saveBtn = $(".saveBtn");
var container = $(".container");
var textArea9am = $("#9am");
var textArea10am = $("#10am");
var textArea11am = $("#11am");
var textArea12pm = $("#12pm");
var textArea1pm = $("#1pm");
var textArea2pm = $("#2pm");
var textArea3pm = $("#3pm");
var textArea4pm = $("#4pm");
var textArea5pm = $("#5pm");

var textAreaArray = [
    textArea9am,
    textArea10am,
    textArea11am,
    textArea12pm,
    textArea1pm,
    textArea2pm,
    textArea3pm,
    textArea4pm,
    textArea5pm,
];

// Update time and textareas
function updateTime() {
    var today = moment();

    // Sets current time in header
    currentDayText.text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // Style timeblocks based on hour
    var now = moment().format("k");
    for (var i = 0; i < textAreaArray.length; i++) {
        textAreaArray[i].removeClass("future past present");

        if (now > textAreaArray[i].data("hour")) {
            textAreaArray[i].addClass("past");

        } else if (now == textAreaArray[i].data("hour")) {
            textAreaArray[i].addClass("present");

        } else {

            textAreaArray[i].addClass("future");
        }
    }
}

// Load schedule from local storage
function loadTimeBlocks(){
    for (var i=0; i < textAreaArray.length; i++){
        textAreaArray[i].text = localStorage.getItem("time-block" + textAreaArray[i].data("hour"));
    }
}

// save entry to local storage on save click
function handleSave(event){
    event.preventDefault();

    // get element that was clicked
    var btnClicked = $(event.currentTarget);
    // get text of text area within the div of selected save btn
    var targetText = btnClicked.siblings(".textarea");
    // get the hour of selected
    var targetHour = targetText.data("hour");

    localStorage.setItem("time-block" + targetHour, targetText.val());
}

// Main
loadTimeBlocks();
updateTime();
setInterval(updateTime, 1000); 

saveBtn.on('click', handleSave);