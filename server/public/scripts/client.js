$(document).ready(onReady);

// create basic onReady function to hold click handlers
// and renderers
function onReady(){
    console.log('Hello!');
    $('#addButton').on('click', sendTask)
}; // end onReady


// ajax POST to send tasks to DB
function sendTask(){
    console.log('In sendTask');
    // create new object to hold values of inputs
    let newTask = {
        task: $('#taskIn').val(),
        completion: $('#completion').val()
    }; // end newTask
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then((res) => {
        console.log('POST /task succeeded');
        
    }).catch((err) => {
        console.log('There is a bug', err);
    })
}; // end sendTask


// ajax GET to return and render tasks



// clear inputs function



// ajax DELETE to delete tasks on click