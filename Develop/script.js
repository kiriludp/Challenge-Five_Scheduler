var heartBtn = document.querySelector('.btn');
var taskInput = document.querySelector('.description');
var hour = document.querySelector('.hour');

var tasks = [];

var today = dayjs();
$('#currentDay').text(today.format('MMMM DD, YYYY, h:mm:ss a'));

function renderTasks() {
    taskInput.innerHTML = "";
}
   

function init() {

    var savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(savedTasks !== null) {
        tasks = savedTasks;
    }

    renderTasks();
}

function savedTasks() {
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


    savedTasks();
    renderTasks();
   

    heartBtn.addEventListener('click', function(event) {
        var element = event.target;
        if (element.matches('button') === true) {
            var index = element.parentElement.getAttribute('data-index');
            tasks.splice(index, 1);
        }

        savedTasks();
        renderTasks();
    });


    init()

    function hourTracker() {
        
     var currentHour = dayjs().hour();
     
     $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker()

