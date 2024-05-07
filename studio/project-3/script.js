
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



let stops = [
  {'Google Maps': "googlemaps.png"},
  {'Google':"google.jpg"},
  {'Walmart':'walmart.png'},
  {'NFL':'https://www.nfl.com'},
  {'Google Translate':'googletranslate.jpg'},
  {'Weather':'weather.png'},
  {"Instagram":'instagram.png'},
  {"ChatGPT":'chatgpt.png'},
  {'WhatsApp':'whatsapp.png'},
  {'Amazon':'amazaon.png'},
  {'Twitter':'twitter.jpg'},
  {'Facebook':'facebook.jpg'},
  {'Gmail':'gmail.jpg'},
  {'Netflix':'netflix.jpg'},
  {'Wordle':'wordle.png'},
  {'Reddit':'reddit.png'},
  {'YouTube':'youtube.jpg'},
  {'Wikipedia':'https://www.wikipedia.org'},
  {'TikTok':'tiktok.jpg'},
  {'Yahoo':'yahoo.png'}
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

  iframeElement.onload = function() {
      // Access the content of the iframe
      const iframeDocument = iframeElement.contentDocument || iframeElement.contentWindow.document;
      // Find all images inside the iframe
      const images = iframeDocument.querySelectorAll('img');
      // Set the height of each image to 100% to fit it into the iframe
      images.forEach(image => {
          image.style.height = '100%';
      });
  };

  stopContainer.appendChild(stopKeyElement);

  // Call changeDotColor function with the current index
  changeDotColor(currentIndex);

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
      clearInterval(blinkInterval); 
      stopKeyElement.style.fontFamily = '"Yarndings 12", system-ui'; 
      stopKeyElement.classList.add('inbetweenStops'); 

      iframeElement.style.display = 'block';

      setTimeout(() => {
          iframeElement.style.display = 'none';
      }, 4000); // Adjusted timing, value items will be hidden after 4 seconds

      // Call displayStops again after the same timing as the key item change
      setTimeout(displayStops, 100000); // Adjust this timing to match the key item change
  }, 5000);
}



displayStops();

// displayStops(0);





//pop up 
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

function closeAd(adId) {
  let ad = document.getElementById(adId);
  if (ad) {
      ad.classList.add("closedAd");
      ad.textContent = "";
  }
}




