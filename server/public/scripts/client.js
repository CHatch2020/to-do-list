$(document).ready(onReady);

// create basic onReady function to hold click handlers
// and renderers
function onReady() {
  console.log("Hello!");

  getTask();

  $("#addButton").on("click", sendTask);
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
                <td>${task.completion}</td>
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

// ajax DELETE to delete tasks on click
