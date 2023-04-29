$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on('click', function () {
            console.log(this);
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
        
            localStorage.setItem(time,text);
        
        })
    }

    
var today = dayjs();
$('#currentDay').text(today.format('MMMM DD, YYYY, h:mm:ss a'));

var taskInput =$('#task');


