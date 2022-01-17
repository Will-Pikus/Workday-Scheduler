var currentDayText = $("#currentDay")
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

var textAreaElArray = [
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

// Update time
function updateTime() {
    var today = moment();

    // Sets current time in header
    currentDayText.text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // Style timeblocks
    var now = moment().format("k");
    for (var i = 0; i < textAreaElArray.length; i++) {
        textAreaElArray[i].removeClass("future past present");

        if (now > textAreaElArray[i].data("hour")) {
            textAreaElArray[i].addClass("past");

        } else if (now == textAreaElArray[i].data("hour")) {
            textAreaElArray[i].addClass("present");

        } else {

            textAreaElArray[i].addClass("future");
        }
    }
}

updateTime();
setInterval(updateTime, 1000); 

