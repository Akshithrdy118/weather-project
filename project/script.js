// Function to set background based on weather condition
function init(weatherData) {
  document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    switch (weatherData.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('image1.jpeg')";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url('image2.jpg')";
            break;
        case 'Rain':
        case 'Drizzle':
            document.body.style.backgroundImage = "url('image3.jpg')";
            break;
        case 'Mist':
            document.body.style.backgroundImage = "url('images4.jpeg')";
            break;    
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('image5.jpg')";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('image6.jpg')";
            break;
        default:
            // Default background or no change
            break;
    }
}

// Weather fetching function
async function getWeather(city) {
    const API_KEY = "4767455b1ffd7c81c6ee5ee22627c7d2";
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric1`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        
        // Update weather display   
        document.getElementById("weatherOutput").textContent = `Temperature: ${data.main.temp}°F`;
        document.getElementById("weatherOutput1").textContent = `Pressure: ${data.main.pressure} hPa`;
        document.getElementById("weatherOutput2").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("weatherOutput3").textContent = `WindSpeed: ${data.wind.speed} m/s`;
        
        // color to content 
        const para=document.querySelectorAll("reddy")
        for(let i=0;i<para.length;i++){
         para.style.color="red";
        }
        // Call init to change background 
        init(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById("weatherOutput").textContent = 'Error: ' + error.message;
    }
}

// Event listener
document.getElementById('button').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});
