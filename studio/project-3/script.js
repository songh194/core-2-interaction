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

// let progressBar = [
//   {'stop1':'google.com'},
//   {'stop2':'maps.google.com'}
// ]

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }


// var eachStop = document.querySelector('.stop');

// function bringEachStop(){
//   var eachStop = document.getElementsByClassName('.stop')
// }
// let dots = document.getElementsByClassName('.stop');
// let i = 0;
// while (i<dots.length) {
//   console.log(dots[i])
//   i++
// }


// bring dots in, loop
// change color

const progressBarContainer = document.getElementById('pbc');
const dots = progressBarContainer.querySelectorAll('.stop');

function changeDotColor(index) {
    if (index >= dots.length) {
        return; 
    }
    dots[index].style.backgroundColor = 'orange'; 
    setTimeout(() => {
        changeDotColor(index + 1); 
    }, 20000);
}
changeDotColor(0);

// change iframe as set time, "open and close door"
// link 'stops',,,= { stop name: url }

let stops = [
  {'googleMaps': "https://www.google.com/maps"},
  {'google':"https://www.google.com"},
  {'wallmart':'https://www.walmart.com'},
  {'nfl':'https://www.nfl.com'},
  {'googleTranslate':'https://translate.google.com'},
  {'weather':'https://www.weather.com'},
  {"instagram":'https://www.instagram.com'},
  {"chatGPT":'https://chat.openai.com'},
  {'whatsApp':'https://www.whatsapp.com'},
  {'amazon':'https://www.amazon.com'},
  {'twitter':'https://twitter.com'},
  {'facebook':'https://www.facebook.com'},
  {'gmail':'https://mail.google.com'},
  {'netflix':'https://www.netflix.com'},
  {'wordle':'https://www.nytimes.com/games/wordle'},
  {'weather':'https://www.weather.com'},
  {'youtube':'https://www.youtube.com'},
  {'wilipedia':'https://www.wikipedia.org'},
  {'tiktok':'https://www.tiktok.com'},
  {'yahoo':'https://www.yahoo.com'}
]

function displayStop(item) {
  let website = document.createElement('stop')
  website.src = item.values;
  website.classList.add("frameStyle");
  document.getElementsByClassName('mainContainer')
}