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
 function updateHour(){
    console.log(currentHour);
  hourEl.each (function(){
var hourTime=hourEl.value;
console.log(hourTime);
   if (hourTime<currentHour){
     $(this).removeClass("present future").addClass("past");
} else if (hour === currentHour) {
  $(this).removeClass("past future").addClass("present");
} else {
  $(this).removeClass("past present").addClass("future");
}
   
  });
 };

  setInterval(displayTime, 1000);