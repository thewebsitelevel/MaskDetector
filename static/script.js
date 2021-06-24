/**
 * - hacked or locked status of each task
 * - to be obtained from database using API
 */
var hackedOrLocked = ["hacked", "hacked", "hacked", "hacked", "locked", "locked", "locked", "locked", "locked"];

// get number of tasks/questions
var numOfTasks = document.querySelectorAll("[data-question-number]").length;

// for each task
for(var i=0; i<numOfTasks; i++){
    // get task card
    var card = document.querySelector("[data-question-number='" + (i+1) + "']");
    // get hacked p tag containing hacked or locked status
    var hackedStatus = card.querySelector('.stickerdiv .hacked');
    // update status
    if(hackedOrLocked[i] === 'hacked'){
        hackedStatus.textContent = 'Hacked';
    } else {
        hackedStatus.textContent = 'Locked';
    }
}