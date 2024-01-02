
let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "2bc19e33093e3e3b77e92a4298d24f8b";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);

    let jsonData = await getData.json();
    console.log(jsonData);

    console.log(jsonData.name);

    if (jsonData.cod == "400") {
        alert("Please Enter The Location");
        image.src = "error1.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == "404") {
        alert("Please Enter the Right Location");
        image.src = "error2.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }

    city.innerHTML = jsonData.name;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main.toLowerCase();

    if (type.innerHTML === "clouds") {
        image.src = "clouds.png";
    } else if (type.innerHTML === "clear") {
        image.src = "clears.png";
    } else if (type.innerHTML === "rain") {
        image.src = "rain.png";
    } else if (type.innerHTML === "snow") {
        image.src = "rain.png";
    } else if (type.innerHTML === "haze") {
        image.src = "haze.png";
    } else if (type.innerHTML === "strom") {
        image.src = "strom.png";
    }

    input.value = "";
}

function myFun() {
    let search = input.value;
    data(search);
}
