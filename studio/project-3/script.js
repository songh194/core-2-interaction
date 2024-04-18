// time
function updateTime () {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var prepand = (hour >= 12)? " PM " : " AM ";

    hour = (hour >=12)? hour - 12 : hour;

    var currentTime = (hour + ":" + minute + prepand) 
    document.querySelector('#time').textContent = currentTime; 
}
setInterval(updateTime,1000);


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
