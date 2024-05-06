
const progressBarContainer = document.getElementById('pbc');
const dots = progressBarContainer.querySelectorAll('.stop');

function changeDotColor(index) {
    if (index >= dots.length) {
        return; 
    }
    dots[index].style.backgroundColor = 'orange'; 
    setTimeout(() => {
        changeDotColor(index + 1); 
    }, 100000);
}
changeDotColor(0);



let stops = [
  {'Google Maps': "https://www.google.com/maps"},
  {'Google':"https://www.google.com"},
  {'Wallmart':'https://www.walmart.com'},
  {'NFL':'https://www.nfl.com'},
  {'Google Translate':'https://translate.google.com'},
  {'Weather':'https://www.weather.com'},
  {"Instagram":'https://www.instagram.com'},
  {"ChatGPT":'https://chat.openai.com'},
  {'WhatsApp':'https://www.whatsapp.com'},
  {'Amazon':'https://www.amazon.com'},
  {'Twitter':'https://twitter.com'},
  {'Facebook':'https://www.facebook.com'},
  {'Gmail':'https://mail.google.com'},
  {'Netflix':'https://www.netflix.com'},
  {'Wordle':'https://www.nytimes.com/games/wordle'},
  {'Reddit':'https://www.reddit.com'},
  {'YouTube':'https://www.youtube.com'},
  {'Wikipedia':'https://www.wikipedia.org'},
  {'TikTok':'https://www.tiktok.com'},
  {'Yahoo':'https://www.yahoo.com'}
]

function displayStops() {
  const stopContainer = document.querySelector('.mainContainer');
  stopContainer.innerHTML = '';

  const currentIndex = displayStops.index || 0;
  const currentStop = stops[currentIndex];
  const key = Object.keys(currentStop)[0];
  const value = currentStop[key];

  const stopKeyElement = document.createElement('div');
  stopKeyElement.textContent = key;

  const iframeElement = document.querySelector('.iframe iframe');
  iframeElement.src = value;

  stopContainer.appendChild(stopKeyElement);

  displayStops.index = (currentIndex + 1) % stops.length;

  const blinkDuration = 500; // milliseconds
  const blinkCount = 20; // Number of times to blink
  let blinkToggle = true;
  let blinkInterval;
  blinkInterval = setInterval(() => {
    if (blinkToggle) {
      stopKeyElement.style.fontFamily = '"bitcount-mono-single-square", sans-serif';
    } else {
      stopKeyElement.style.fontFamily = '"bitcount-mono-single-line-sq", sans-serif';
    }
    blinkToggle = !blinkToggle;
    blinkCount--;
    if (blinkCount === 0 || linkElement.style.pointerEvents === "none") {
      clearInterval(blinkInterval);
    }
  }, blinkDuration);

  setTimeout(() => {
    clearInterval(blinkInterval); // Stop blinking animation after 5 seconds
    stopKeyElement.style.fontFamily = '"Yarndings 12", system-ui'; // Reset to default font
    stopKeyElement.classList.add('inbetweenStops'); // Apply the 'inbetweenStops' class
  }, 5000);
}

displayStops(0);






//pop up 
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

function closeAd() {
    let ads = document.getElementsByClassName("ad");
    for (let i = 0; i < ads.length; i++) {
        ads[i].classList.add("closedAd");
    }
}


