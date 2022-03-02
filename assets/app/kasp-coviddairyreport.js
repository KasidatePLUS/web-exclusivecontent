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
    <div class="cov">
    <h3 class="uk-card-title thai uk-text-bold">รายงานสถานการณ์โควิด-19 ประจำวันที่   <span class="cov-date uk-text-warning">  ${covidDairyReport.txn_date} </span></h3>
      <div class="cov-newcase-title">  NEW CASE </div>
      <div class="cov-newcase">  ${covidDairyReport.new_case} Exclude abroad : ${covidDairyReport.new_case - covidDairyReport.new_case_excludeabroad}</div>
      <div class="cov-recoveredcase">Recovered : + ${covidDairyReport.new_recovered} // total : ${covidDairyReport.total_recovered} // 1 jan 2022 = ${covidDairyReport.total_recovered - 2168494}</div>
      <div class="cov-deathcase">Death : + ${covidDairyReport.new_death} // total : ${covidDairyReport.total_death} // 1 jan 2022 = ${covidDairyReport.total_death - 21698 }</div>
      <div class="cov-totalcase">Total Case : + ${covidDairyReport.total_case} // 1 jan 2022 = ${covidDairyReport.total_case - 2223435 }</div>
      <div class="cov-lastupdate"> Update : ${covidDairyReport.update_date}</div>
    </div>
    `;

covidsection += covidSegment;
});

let covidcontainer = document.querySelector('.covid-container');
covidcontainer.innerHTML = covidsection;
}

renderCovidData();