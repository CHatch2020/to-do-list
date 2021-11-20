$(document).ready(onReady);


// create basic onReady function to hold click handlers
// and renderers
function onReady() {
  console.log("Hello!");
  getTask();
  $("#addButton").on("click", sendTask);
  $("#inputTasks").on("click", ".update-btn", updateTasks);
  $("#inputTasks").on("click", ".delete-btn", deleteTasks);
} // end onReady

// ajax POST to send tasks to DB
function sendTask() {
  console.log("In sendTask");
  // create new object to hold values of inputs
  let newTask = {
    task_name: $("#taskIn").val(),
    completion: $("#completion").val(),
  }; // end newTask
  // creat ajax
  $.ajax({
    type: "POST",
    url: "/tasks",
    data: newTask,
  })
    .then((res) => {
      console.log("POST /task succeeded");
      getTask();
      clearInputs();
    })
    .catch((err) => {
      console.log("Error in ajax POST", err);
    });
} // end sendTask

// ajax GET to return and render tasks
function getTask() {
  console.log("In getTask");
  // create ajax
  $.ajax({
    type: "GET",
    url: "/tasks",
  })
    .then((res) => {
      // empty table
      $("#inputTasks").empty();
      //loop through res
      for (let task of res) {
        $("#inputTasks").append(`
            <tr>
                <td>${task.task_name}</td>
                <td class="changeColor">${task.completion}</td>
                <td><button class="update-btn" data-id="${task.id}">Complete</button></td>
                <td><button class="delete-btn" data-id="${task.id}">Delete</button></td>
            </tr>
            `);
      } // end loop
    })
    .catch((err) => {
      console.log("Error in ajax GET", err);
    });
} // end getTask

// clear inputs function
function clearInputs() {
  $("#taskIn").val("");
  $("#completion").val("");
} // end clearInputs

// ajax PUT to update completed tasks
function updateTasks() {
  console.log("in updateTasks");
  const update = $(this).data("id");
  const color = $(this).data("id");
  $.ajax({
    type: "PUT",
    url: `/tasks/${update}`,
  })
    .then((res) => {
      console.log(res);
      getTask();
      changeColor(color);
    })
    .catch((err) => {
      console.log("Error in ajax PUT", err);
    });
} // end updateTasks

// ajax DELETE to delete tasks on click
function deleteTasks() {
  console.log("in deleteTasks");
  const deleteTheTask = $(this).data("id");
  $.ajax({
    type: "DELETE",
    url: `/tasks/${deleteTheTask}`,
  })
    .then((res) => {
      console.log(res);
      getTask();
    })
    .catch((err) => {
      console.log("Error in ajax DELETE", err);
    });
} // end deleteTasks

function changeColor(theColor) {
  console.log(theColor);
  if ($('.update-btn').on('click')) {
    $(".changeColor").css("color", "white");
    return true;
  }
} // end changeColor
