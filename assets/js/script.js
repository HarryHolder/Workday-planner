// Run function for whole page
function init() {
  currentDateDisplay(); // display the date at the top of the page
  updateClass(); // change the timeblock style depending on if past/current/future task
  loadTasks();
}

function currentDateDisplay() {
  let todaysDateEl = $("#currentDay");
  let todaysDate = moment().format("dddd, LL");
  todaysDateEl.text(todaysDate);
}

// 2. Present timeblocks for standard business hours when the user scrolls down.
// Bootstrap grid rows for each hour
// cols - hour, task, save button

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
    } else if ($(this).attr("id") == currentTime) {
      $(this).removeClass("future past");
      $(this).addClass("current");
    } else if ($(this).attr("id") < currentTime) {
      $(this).removeClass("current future");
      $(this).addClass("past");
    }
  });
}

// Allow a user to enter an event when they click a timeblock



// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").click(function () { //on the click of a button run function
  let task9 = $("#9");
  // create element for each timeblock textarea
  localStorage.setItem('input9', task9.val()); 
  // save value entered in the text area to local storage linked to block id
  let task10 = $("#10"); 
  localStorage.setItem('input10', task10.val());
  let task11 = $("#11"); 
  localStorage.setItem('input11', task11.val());
  let task12 = $("#12"); 
  localStorage.setItem('input12', task12.val());
  let task13 = $("#13"); 
  localStorage.setItem('input13', task13.val());
  let task14 = $("#14"); 
  localStorage.setItem('input14', task14.val());
  let task15 = $("#15"); 
  localStorage.setItem('input15', task15.val());
  let task16 = $("#16"); 
  localStorage.setItem('input16', task16.val());
  let task17 = $("#17"); 
  localStorage.setItem('input17', task17.val());
});


// Persist events between refreshes of a page

function loadTasks() {
  $("#9").val(localStorage.getItem('input9'));
  $("#10").val(localStorage.getItem('input10'));
  $("#11").val(localStorage.getItem('input11'));
  $("#12").val(localStorage.getItem('input12'));
  $("#13").val(localStorage.getItem('input13'));
  $("#14").val(localStorage.getItem('input14'));
  $("#15").val(localStorage.getItem('input15'));
  $("#16").val(localStorage.getItem('input16'));
  $("#17").val(localStorage.getItem('input17'));
}

// Load page
init();

setInterval(updateClass, 60 * 1000);
