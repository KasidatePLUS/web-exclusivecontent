fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
.then(response => response.json())
.then(data => console.log(data));

async function getCovidData() {
let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';
try {
    let res = await fetch(url);
    return await res.json();
} catch (error) {
    console.log(error);
}
}

async function renderCovidData() {
let covidDairyReport = await getCovidData();
let covidsection = '';
covidDairyReport.forEach(covidDairyReport => {
   

    let covidSegment = `
    ${covidDairyReport.txn_date} 
    `;

covidsection += covidSegment;
});

let covidcontainer = document.querySelector('.covid-timer-container');
covidcontainer.innerHTML = covidsection;
}

renderCovidData();

