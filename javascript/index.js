function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(" .date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesTimeElement = losAngelesElement.querySelector(" .time");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("hh:mm:ss")} <em>${losAngelesTime.format("a")}</em>`;

  // Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(" .date");
  let madridTime = moment().tz("Europe/Madrid");
  madridTimeElement = madridElement.querySelector(" .time");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = `${madridTime.format("hh:mm:ss")} <em>${madridTime.format("a")}</em>`;

  // Bangkok

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(" .date");
  let bangkokTime = moment().tz("Asia/Bangkok");
  bangkokTimeElement = bangkokElement.querySelector(" .time");
  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = `${bangkokTime.format("hh:mm:ss")} <em>${bangkokTime.format("a")}</em>`;
}
updateTime();
setInterval(updateTime, 1000);
