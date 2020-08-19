
// SECTION 1 ........................................................
// Functions for dropdown menus Section 1

function dropdownMenu(id) {
  var menu = document.getElementById('menu'+id);

  if ( menu.style.maxHeight == "0px" ) {
    menu.style.maxHeight = "500px";
  } else {
    menu.style.maxHeight = "0px";
  }
}




// SECTION 3 ........................................................
// Connect with WebSocket and retrieve data
function WebSocketTest() {

  var id = document.getElementById('id-sensor');
  var motor = document.getElementById('motor-sensor');
  var output = document.getElementById('output-sensor');
  var total = document.getElementById('total-sensor');
  var available = document.getElementById('available-sensor');
  var s1 = document.getElementById('1-sensor');
  var s2 = document.getElementById('2-sensor');

  let socket = new WebSocket("ws://35.183.23.210:8000/b");
  var container = document.getElementById('webSocketTest');

  socket.onopen = function(e) {
  };

  socket.onmessage = function(event) {
    var data = JSON.parse(event.data);
    id.innerHTML = data["sensor"]["uuid"];
    motor.innerHTML = data["sensor"]["motor_rpm"];
    output.innerHTML = data["sensor"]["output"];
    total.innerHTML = data["lidar"]["memory"]["total"];
    available.innerHTML = data["lidar"]["memory"]["available"];
    s1.innerHTML = data["lidar"]["cpu"]["1"];
    s2.innerHTML = data["lidar"]["cpu"]["2"];

  };

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died');
    }
  };

  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
  };
}

window.document.onload = WebSocketTest();
