var currentDayEl=$("#currentDay");
var currentHour="";
var hourEl= $("#hour");
var timeblock=$(".row");
// handle displaying the day
function displayTime() {
    var today = dayjs().format("dddd DD/MM/YYYY");
    const d = new Date();
   currentHour=d.getHours();
    currentDayEl.text(today);
    updateHour();
  };
//   hour colour updating
 function updateHour(){
    // for each time block element
    timeblock.each(function() {
        // getting how and description elemenets
        var rowHour = parseInt($(this).find(".hour").text());
        var description = $(this).find(".description");
        // comparison
        if ( rowHour<currentHour) {
          description.removeClass("present future").addClass("past");}
          else if (rowHour == currentHour) {
            description.removeClass("past future").addClass("present");
        } else {
            description.removeClass("past present").addClass("future");
        };
      });
    };
    // save button event listener
$(".saveBtn").on("click", function() {
  var textinput = $(this).siblings(".description");
  var inputValue = textinput.val();
  var time = $(this).siblings(hourEl).text();
  localStorage.setItem(time, inputValue)
});
// loading values using the key of hour
timeblock.each(function() {
  var key = $(this).find(hourEl).text();
  var savedInput = localStorage.getItem(key);

  if (savedInput !== null) {
    $(this).find(".description").val(savedInput);
  }
});
// making sure time is regularly updated
  setInterval(displayTime, 1000);