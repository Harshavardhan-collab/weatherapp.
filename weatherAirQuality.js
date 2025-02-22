let Latitude = document.querySelector("#Latitude")
let Longitude = document.querySelector("#Longitude")
let check = document.querySelector("#check")
let message = document.querySelector("#message")
let O2, Co2, No2, So2, Pm25;
check.addEventListener("click", () => {
    let lati = Number(Latitude.value.trim())
    let longi = Number(Longitude.value.trim())

    if (lati >= 20 && lati <= 30 && longi >= 40 && longi <= 50) {
        message.innerHTML = `O2:  20.9-21.1 %<br><br>Co2:  300-400 ppm<br><br>No2:  15-25 ug/m^3<br><br>So2:  2-6ug/m^3<br><br>Pm25:  20-30ug/m^3 <br><br>"Precautions:  <br>Wear a mask to reduce exposure<br> to harmful particles in the air."
`;



    } else if (lati >= 35 && lati <= 45 && longi >= 60 && longi <= 70) {
        message.innerHTML = `O2:  25.9-29.1 %<br><br>Co2:  400-500 ppm<br><br>No2:  10-25 ug/m^3<br><br>So2:  4-8ug/m^3<br><br>Pm25:  40-50ug/m^3<br><br> " Precautions: <br> Wear a mask to reduce exposure <br>to harmful particles in the air."
`;



    } else if (lati >= -10 && lati <= 10 && longi >= 100 && longi <= 110) {
        message.innerHTML = `O2:  11.9-18.1 %<br><br>Co2:  100-200 ppm<br><br>No2:  13-15 ug/m^3<br><br>So2:  1-4ug/m^3<br><br>Pm25:  10-25ug/m^3<br><br>" Precautions:  <br>Wear a mask to reduce exposure <br>to harmful particles in the air."
`;


    } else {
        message.textContent = `enter valid ranges of latitude and longitudes`;
    }






})