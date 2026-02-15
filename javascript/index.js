function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(" .date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesTimeElement = losAngelesElement.querySelector(" .time");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("hh:mm:ss")} <em>${losAngelesTime.format("a")}</em>`;

  // Malaga
  let malagaElement = document.querySelector("#malaga");
  let malagaDateElement = malagaElement.querySelector(" .date");
  let malagaTime = moment().tz("Europe/Madrid");
  malagaTimeElement = malagaElement.querySelector(" .time");
  malagaDateElement.innerHTML = malagaTime.format("MMMM Do YYYY");
  malagaTimeElement.innerHTML = `${malagaTime.format("hh:mm:ss")} <em>${malagaTime.format("a")}</em>`;

  // Bangkok

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(" .date");
  let bangkokTime = moment().tz("Asia/Bangkok");
  bangkokTimeElement = bangkokElement.querySelector(" .time");
  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = `${bangkokTime.format("hh:mm:ss")} <em>${bangkokTime.format("a")}</em>`;
}

function updateCity(event) {
  let selectedOption = event.target.selectedOptions[0];
  if (!selectedOption.value) return;
  let cityTimeZone = selectedOption.value;
  let cityName = selectedOption.dataset.city;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="clock-container" id="city">
          <div class="location">
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            <h2>${cityName}</h2>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss")} <em>${cityTime.format("a")}</em></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
