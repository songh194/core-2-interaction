var apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var periods = data.properties.periods;

    periods.forEach(period => {
      var element = document.createElement('div');
      element.className = 'period-card';
      element.innerHTML = `
        <h2>${period.name}</h2>
        <p>Start Time: ${period.startTime}</p>
        <p>End Time: ${period.endTime}</p>
        <p>Temperature: ${period.temperature}°F</p>
        <p>Short Forecast: ${period.shortForecast}</p>
        <p>Detailed Forecast: ${period.detailedForecast}</p>
      `;
      document.body.classList.add("blue")
      document.body.appendChild(element);
    });
  })
  .catch(error => console.error('Error:', error));
