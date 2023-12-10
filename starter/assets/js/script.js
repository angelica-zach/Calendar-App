var currentDayEl=$("#currentDay");
var currentHour="";
var hourEl= $("#hour");
var description=("textarea")
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
    $(".row").each(function() {
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
        }
          ;});};
  
// making sure time is regularly updated
  setInterval(displayTime, 1000);