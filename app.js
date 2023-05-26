const calculate = () => {
  setInterval(() => {
    if (document.getElementById("birthdate").value === "") {
      return;
    } else {
      let birthdate = new Date(document.getElementById("birthdate").value);
      let now = new Date();
      let ageInMiliSec = now.getTime() - birthdate.getTime();

      let ageInSec = ageInMiliSec / 1000;
      let ageInMins = ageInSec / 60;
      let ageInHrs = ageInMins / 60;
      let ageInDays = ageInHrs / 24;
      let ageInMonths = ageInDays / 30.4573;
      let ageInYears = ageInMonths / 12;

      document.querySelector("#years").innerHTML = Math.floor(ageInYears);
      document.querySelector("#months").innerHTML = Math.floor(
        ageInMonths % 12
      );
      document.querySelector("#days").innerHTML = Math.floor(
        ageInDays % 30.4573
      );
      document.querySelector("#hours").innerHTML = Math.floor(ageInHrs % 24);
      document.querySelector("#minutes").innerHTML = Math.floor(ageInMins % 60);
      document.querySelector("#seconds").innerHTML = Math.floor(ageInSec % 60);
    }
  }, 1000);
};

const reset = () => {
  return window.location.reload();
};
