function init() {
  currentDateDisplay(); // display the date at the top of the page
  updateClass(); // change the timeblock style depending on if past/current/future task
  loadTasks(); // Task to retrieve saved data from local storage 
}

function currentDateDisplay() {
  let todaysDateEl = $("#currentDay");
  let todaysDate = moment().format("dddd, LL");
  todaysDateEl.text(todaysDate);
}

function updateClass() {
  let currentTime = moment().hour();

  let taskblockEl = $(".task-block");

  taskblockEl.each(function () {
    if ($(this).attr("id") < currentTime) {
      $(this).addClass("past");
    } else if ($(this).attr("id") === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("current");
    } else if ($(this).attr("id") > currentTime) {
      $(this).removeClass("current");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}



//  On click of any save button save all entered fields to local storage
$(".saveBtn").click(function () { 
  let value = $(this).siblings(".task-block").val();
  let time = $(this).siblings(".hour").attr("id");
  let date = moment().format("dddd, LL");
  let task = [value, date];
  localStorage.setItem(time, JSON.stringify(task));
});

function loadTasks() {
  $(".task-block").each(function (){
    let task = JSON.parse(localStorage.getItem($(this).siblings(".hour").attr("id")));
    console.log(task);
    let taskDate = task[1];
    let currentDate = moment().format("dddd, LL");
    if (currentDate === taskDate) {
      $(this).text (task[0]);
    } else {
      localStorage.clear();
    }
  })
}

setInterval(updateClass, 10000);

// Load page
init();

