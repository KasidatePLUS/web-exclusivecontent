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
    <div class="cov uk-container uk-overlay uk-overlay-default" >
    <div class="cov-title uk-text-center uk-text-bold">
      <h3 class="uk-card-title thai uk-text-bold ">รายงานสถานการณ์โควิด-19 ประจำวันที่ <span
          class="cov-date uk-text-warning"> ${covidDairyReport.txn_date} </span></h3>
    </div>
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
      <div class="cov-section cov-newcase-section uk-card uk-card-hover uk-text-top uk-card-body">
        <div class="cov-newcase-title uk-text-bold uk-text-top thai"> ผู้ติดเชื้อรายใหม่ </div>
        <div class="cov-newcase-data uk-text-top"> ${covidDairyReport.new_case} <span class="cov-rai-unit thai">ราย</span> </div>
      </div>

      <div class="cov-section cov-recoveredcase-section uk-card uk-card-hover uk-text-top uk-card-body">
        <div class="cov-recovered-title uk-text-bold thai"> หายป่วยวันนี้ </div>
        <div class="cov-recovered-data uk-text-top"> ${covidDairyReport.new_recovered} <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-recovered-total thai uk-text-bottom"> หายป่วยสะสม :<span class="cov-recovered-total-data">
            ${covidDairyReport.total_recovered - 2168494}</span> <span class="cov-rai-unit-second">ราย</span>
             </div>
      </div>

      <div class="cov-section cov-deathcase-section uk-card uk-text-top uk-card-body">
        <div class="cov-death-title uk-text-bold uk-text-top thai"> เสียชีวิตวันนี้ </div>
        <div class="cov-death-data uk-text-top"> ${covidDairyReport.new_death} <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-death-total thai uk-text-bottom"> เสียชีวิตสะสม :<span class="cov-death-total-data">
            ${covidDairyReport.total_death - 21698 }</span> <span class="cov-rai-unit-second">ราย</span></div>
      </div>
      <div class="cov-section cov-totalcase-section uk-card uk-card-hover uk-text-top uk-card-body">
        <div class="cov-total-title uk-text-bold thai uk-text-top"> ผู้ป่วยสะสม <span class="cov-totalcase-until"> ตั้งแต่ 1 มกราคม
            2565</span> </div>
        <div class="cov-total-data uk-text-bottom"> ${covidDairyReport.total_case - 2223435 } <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-all_total thai"> ป่วยสะสมนับตั้งแต่การระบาดครั้งแรก <span class="cov-all_total-data">
            ${covidDairyReport.total_case}</span> <span class="cov-rai-unit-second">ราย</span></div>
      </div>
    </div>
    <div class="cov-right">
      <div class="cov-lastupdate"> Update : ${covidDairyReport.update_date}</div>
    </div>
  </div>
    `;

covidsection += covidSegment;
});

let covidcontainer = document.querySelector('.covid-container');
covidcontainer.innerHTML = covidsection;
}

renderCovidData();

