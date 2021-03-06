//Fade in using jquery
$("#intro-header").fadeIn(2000);
$("#schedule-div").fadeIn(3000);

//Set date and time variables
var currentDate = $("#current-date");
var currentTime = $("#current-time");
var currentHour = moment();
var hour = currentHour.format("H");
var amPm = moment();
var amOrpm = amPm.format("a");

//Using moment.js to format and display date and time
setInterval(() => {
    var dayNow = moment();
    var timeNow = moment();

    var day = dayNow.format('dddd - MMMM DD, YYYY ');
    var time = timeNow.format('h:mma');

    currentDate.text(day);
    currentTime.text(time);

    updateBckgrndColor()
}, 1000);

//Putting Schedule times in an array
var scheduleTimes = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//For loop the schedule times and dynamically create textarea and button variables
for (var i = 0; i < scheduleTimes.length; ++i) {
    this["txt" + scheduleTimes[i]] = $("#txt" + scheduleTimes[i]);
    this["btn" + scheduleTimes[i]] = $("#btn" + scheduleTimes[i]);
}

//Setting sticky note variable
var stickyNote = $("#pinkStickyNote");

//Function to make text display in the textarea elements and sticky note
renderTextarea();

//Created function to display textarea values
function renderTextarea() {

    //For loop the schedule times and dynamically create local storage variables
    for (var i = 0; i < scheduleTimes.length; ++i) {
        this["txt" + scheduleTimes[i] + "stored"] = localStorage.getItem(scheduleTimes[i]);
        this["txt" + scheduleTimes[i]].val(this["txt" + scheduleTimes[i] + "stored"])
    }

    var stickyNoteStored = localStorage.getItem("stickyNote");
    stickyNote.val(stickyNoteStored);
}

//Function to display an overlay when the user clicks save
function displayOverlay() {
    $("#overlay").fadeIn(000);
    $("#overlay").fadeOut(2000);
}

//Function to display an overlay when the sticky note is saved
function displayStickyOverlay() {
    $("#overlaySticky").fadeIn(1000);
    $("#overlaySticky").fadeOut(2000);
}

//Use forEach() method on the scheduleTimes array to create the button clicks for saving text
scheduleTimes.forEach(createButtonClick);

//function to create button clicks
function createButtonClick(times, index){
    var btns = this["btn" + times];
    var txt = this["txt" + times];

     btns.click(function(){
                event.preventDefault();
                localStorage.setItem(times, txt.val());
                displayOverlay();
            })
}

//When a user clicks out of the sticky note save text
$("#pinkStickyNote").blur(function () {
    event.preventDefault();

    localStorage.setItem("stickyNote", stickyNote.val());

    displayStickyOverlay();
});

// Update background color function based on hour of the day
function updateBckgrndColor() {

    if (hour == 9) {
        txt9am.css("background-color", "#F08080");
        txt10am.css("background-color", "#7FFF00");
        txt11am.css("background-color", "#7FFF00");
        txt12pm.css("background-color", "#7FFF00");
        txt1pm.css("background-color", "#7FFF00");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 10) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#F08080");
        txt11am.css("background-color", "#7FFF00");
        txt12pm.css("background-color", "#7FFF00");
        txt1pm.css("background-color", "#7FFF00");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");

    }
    else if (hour == 11) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#F08080");
        txt12pm.css("background-color", "#7FFF00");
        txt1pm.css("background-color", "#7FFF00");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 12) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#F08080");
        txt1pm.css("background-color", "#7FFF00");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 13) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#F08080");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 14) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#D3D3D3");
        txt2pm.css("background-color", "#F08080");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 15) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#D3D3D3");
        txt2pm.css("background-color", "#D3D3D3");
        txt3pm.css("background-color", "#F08080");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 16) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#D3D3D3");
        txt2pm.css("background-color", "#D3D3D3");
        txt3pm.css("background-color", "#D3D3D3");
        txt4pm.css("background-color", "#F08080");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour == 19) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#D3D3D3");
        txt2pm.css("background-color", "#D3D3D3");
        txt3pm.css("background-color", "#D3D3D3");
        txt4pm.css("background-color", "#D3D3D3");
        txt5pm.css("background-color", "#F08080");
    }
    else if (hour < 9) {
        txt9am.css("background-color", "#7FFF00");
        txt10am.css("background-color", "#7FFF00");
        txt11am.css("background-color", "#7FFF00");
        txt12pm.css("background-color", "#7FFF00");
        txt1pm.css("background-color", "#7FFF00");
        txt2pm.css("background-color", "#7FFF00");
        txt3pm.css("background-color", "#7FFF00");
        txt4pm.css("background-color", "#7FFF00");
        txt5pm.css("background-color", "#7FFF00");
    }
    else if (hour > 17) {
        txt9am.css("background-color", "#D3D3D3");
        txt10am.css("background-color", "#D3D3D3");
        txt11am.css("background-color", "#D3D3D3");
        txt12pm.css("background-color", "#D3D3D3");
        txt1pm.css("background-color", "#D3D3D3");
        txt2pm.css("background-color", "#D3D3D3");
        txt3pm.css("background-color", "#D3D3D3");
        txt4pm.css("background-color", "#D3D3D3");
        txt5pm.css("background-color", "#D3D3D3");
    }
}

