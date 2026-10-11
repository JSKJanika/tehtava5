const kurssi = "Johdatus sovelluskehitykseen";
let osallistujat = 25;
console.log("Hei maailma! Kurssi:", kurssi);
console.log("Osallistujamäärä:", osallistujat);
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Hyvää päivää!";
} else {
  greeting = "Hyvää iltaa!";
}

document.getElementById("demo").innerHTML = greeting;

function laskealennettuhinta (hinta) {
  let alennettuhinta = hinta - 50;  
  return alennettuhinta;
}
document.getElementById("demo2").innerHTML = laskealennettuhinta(100)

const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");
haeNappi.addEventListener("click", () => {
tulosTeksti.innerText = "Haetaan neuvoa,odottele rauhassa...";
fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
.then(response => response.json())
.then(data => {
console.log("Rajapinnan vastaus:", data);
tulosTeksti.innerText = data.slip.advice;
})
.catch(error => {
console.error("Virhe haussa:", error);
tulosTeksti.innerText = "Neuvon hakeminen epäonnistui!";
});
});

