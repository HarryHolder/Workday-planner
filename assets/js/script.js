// Run function for whole page
function init() {
  currentDateDisplay();
  updateClass();
}

// 1. Display the current day at the top of the calender when a user opens the planner.

function currentDateDisplay() {
  let todaysDateEl = $("#currentDay");
  let todaysDate = moment().format("dddd, LL");
  todaysDateEl.text(todaysDate);
}

// 2. Present timeblocks for standard business hours when the user scrolls down.
// Bootstrap grid rows for each hour
// 3 cols - hour, task, save button

// 3. Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// 3 css classes for past, current and future tasks
// have classes change depending on time of day

function updateClass() {
  let currentTime = moment().hour();

  let taskblockEl = $(".task-block");

  taskblockEl.each(function () {
    if ($(this).attr("id") > currentTime) {
      $(this).removeClass("current past");
      $(this).addClass("future");
    } else if ($(this).attr("id") === currentTime) {
      $(this).removeClass("future past");
      $(this).addClass("current");
    } else if ($(this).attr("id") < currentTime) {
      $(this).removeClass("current future");
      $(this).addClass("past");
    }
  });
}
updateClass();
// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

// Load page
init();

setInterval(updateClass, 60 * 1000);
