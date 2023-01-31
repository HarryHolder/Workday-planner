function init() {
  currentDateDisplay(); // function to display the date at the top of the page
  updateClass(); // funtion to update style for past/current/future task
  loadTasks(); // Task to retrieve saved data from local storage 
}

function currentDateDisplay() {
  let todaysDateEl = $("#currentDay"); // Link element to html
  let todaysDate = moment().format("dddd, LL"); // Get the date and add to variable
  todaysDateEl.text(todaysDate); // Make text content of html element todays date
}

function updateClass() { // function to change class based on time of day
  let currentTime = moment().hour(); // get current time and add to variable

  let taskblockEl = $(".task-block"); // get element for each hours time block

  taskblockEl.each(function () {
    if ($(this).attr("id") < currentTime) { // If time-block id number is less than hour of the day 
      $(this).addClass("past"); // add class of 'past' to time-block
    } else if ($(this).attr("id") === currentTime) { // If time-block id number is the same as hour of the day 
      $(this).removeClass("past"); // remove class 'past' to time-block
      $(this).addClass("current"); // add class of 'current' to time-block
    } else if ($(this).attr("id") > currentTime) { // If time-block id number is greater than hour of the day 
      $(this).removeClass("current"); // remove class of 'current' from time-block
      $(this).removeClass("past"); // remove class of 'past' from time-block
      $(this).addClass("future"); // add class of 'future' to time-block
    }
  });
}

$(".saveBtn").click(function () {  // If a save button is clicked
  let value = $(this).siblings(".task-block").val(); // Variable to record the text entry of the buttons sibling
  let time = $(this).siblings(".hour").attr("id"); // Variable to record which hour the task belongs to 
  let date = moment().format("dddd, LL"); // A variable to record the date the task is set on
  let task = [value, date]; // An array containing the task entered and the date it was entered
  localStorage.setItem(time, JSON.stringify(task)); // save to local storage with the key as the time slot and the value as the task and date
});


// function to get items from local storage
// includes the functions to clear local storage if it was saved on a previous day
function loadTasks() { // get tasks from local storage
  $(".task-block").each(function (){ 
    let task = JSON.parse(localStorage.getItem($(this).siblings(".hour").attr("id"))); 
    console.log(task);
    let taskDate = task[1]; // Identify the date the task was recorded on
    let currentDate = moment().format("dddd, LL"); // get the current date 
    if (currentDate === taskDate) { 
      $(this).text (task[0]); // if the current date is the same as the date the task was recorded get task
    } else {
      localStorage.clear(); // If the task was entered on a different day, clear the storage
    }
  })
}

setInterval(updateClass, 10000); // update every 10 seconds to chec time for updating classes

// Load page
init();

