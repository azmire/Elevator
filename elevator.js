/* /* Call elevator function*/
let direction = 1;
document.addEventListener("click", function (event) {
  // check which buton was clicked using the event.target.id property
  if (event.target.id == "button1") {
    direction = 40;
  } else if (event.target.id == "button2") {
    direction = 31;
  } else if (event.target.id == "button3") {
    direction = 30;
  } else if (event.target.id == "button4") {
    direction = 21;
  } else if (event.target.id == "button5") {
    direction = 20;
  } else if (event.target.id == "button6") {
    direction = 11;
  } else if (event.target.id == "button7") {
    direction = 10;
  } else if (event.target.id == "button8") {
    direction = 1;
  }
});

function callElevator(elevator1Pos, elevator2Pos, direction) {
  /* direction 1 means I am on floor 0, going up*/
  /*direction 10 means I am on floor 1 going down; 11 means floor 1 going up */
  /* direction 20=> 2nd floor going down; 21=> 2nd floor going up */
  let myPosition = Math.floor(direction / 10);
  let distance1 = Math.abs(myPosition - elevator1Pos);
  let distance2 = Math.abs(myPosition - elevator2Pos);
  if (distance1 < distance2) {
    return "Elevator 1 is coming";
  }
  if (distance1 > distance2) {
    return "Elevator 2 is coming";
  }
  if (
    elevator1Pos == elevator2Pos &&
    (myPosition < elevator1Pos || myPosition > elevator1Pos)
  ) {
    if (Math.floor(Math.random() * 2) == 0) {
      return "Elevator 1 is coming";
    } else {
      return "Elevator 2 is coming";
    }
  }
  if (myPosition == elevator1Pos && myPosition == elevator2Pos) {
    return "Elevator 1&2 are coming";
  }

  if (distance1 == distance2) {
    if (
      direction % 2 == 0 &&
      elevator1Pos > myPosition &&
      elevator2Pos < myPosition
    ) {
      return "Elevator 2 is coming";
    }
    if (
      direction % 2 == 0 &&
      elevator1Pos < myPosition &&
      elevator2Pos > myPosition
    ) {
      return "Elevator 1 is coming";
    }
    if (
      direction % 2 == 1 &&
      elevator1Pos > myPosition &&
      elevator2Pos < myPosition
    ) {
      return "Elevator 1 is coming";
    }
    if (
      direction % 2 == 1 &&
      elevator1Pos < myPosition &&
      elevator2Pos > myPosition
    ) {
      return "Elevator 2 is coming";
    }
  }
}

/* console.log(callElevator(0, 1, 21)); */
function myFunction() {
  document.getElementById("message").innerHTML = callElevator(0, 3, direction);
  setTimeout(() => {
    document.getElementById("message").innerHTML = "Elevator arrived!";
  }, 2000);
}
