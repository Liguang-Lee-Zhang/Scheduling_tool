let currentDate = $('#currentDay');
let saveBtn = $(".saveBtn");
let scheduledEvent = $('.fas');
let textArea = $('.description');
let timeBlocks = document.querySelectorAll("div.time-block");
timeBlocks = Array.from(timeBlocks);
let savedItem = ["","","","","","","","",""];


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {


  // function that dynamically adds or changes classes of the time blocks.
  // call this event every second
  function updateClass() {
    
    //current time in 24 hour format
    let currentTime = dayjs().format('H');
    currentTime = Number(currentTime);

    //assigning/changing the class of the time-blocks
    for (let i = 0; i < timeBlocks.length; i++) {
     
      let timeBlockTime = timeBlocks[i].id.substring(5,7);

       //compare the event time to current time
      timeBlockTime = Number(timeBlockTime);

      if(timeBlockTime<currentTime){
        timeBlocks[i].classList.add("past");
      } else if(timeBlockTime == currentTime){
        timeBlocks[i].classList.add("present");
      } else {
        timeBlocks[i].classList.add("future");
      } 
     }
  
  }
  // Updates the time-block class every second
  setInterval(updateClass,1000);


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //






  // Displays the current date in the header of the page.
  function setTime(){
    currentDate.text(dayjs().format('dddd, MMMM DD'));
  }

  //refresh the time every 1000 ms
  setInterval(setTime,1000);



    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  scheduledEvent.textContent = savedItem;
  saveBtn.addEventListener("click", function(){

    let enteredItem = scheduledEvent.textContent;

    if (enteredItem === ""){
      return;
    }

    savedItem[i] = enteredItem;
     
    









    localStorage.setItem("savedItem", savedItem);




  });




//   //reads the stored events from local storage 



// saves the entered events into local storage
  function saveActivityToStorage(Activity) {
    localStorage.setItem('Activity', Activity);
  }
