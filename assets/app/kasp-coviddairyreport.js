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
    <div class="cov-title uk-panel uk-dark uk-margin-medium uk-text-center">
      <h3 class="uk-card-title thai uk-text-bold ">รายงานสถานการณ์โควิด-19 ประจำวันที่ <span
          class="cov-date uk-text-warning"> ${covidDairyReport.txn_date} </span></h3>
    </div>
    <div class="uk-grid-small uk-child-width-expand@m uk-text-center" uk-grid>
      <div class="cov-section cov-newcase-section  uk-width-1-2 uk-card uk-card-default uk-card-body">
        <div class="cov-newcase-title uk-text-bold thai"> ผู้ติดเชื้อรายใหม่ </div>
        <div class="cov-newcase-data"> ${covidDairyReport.new_case} <span class="cov-rai-unit thai">ราย</span> </div>
      </div>

      <div class="cov-section cov-recoveredcase-section  uk-width-1-3 uk-card uk-card-default uk-card-body">
        <div class="cov-recovered-title uk-text-bold thai"> หายป่วยวันนี้ </div>
        <div class="cov-recovered-data"> ${covidDairyReport.new_recovered} <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-recovered-total thai"> หายป่วยสะสม :<span class="cov-recovered-total-data">
            ${covidDairyReport.total_recovered - 2168494}</span> <span class="cov-rai-unit-second">ราย</span>
             </div>
      </div>

      <div class="cov-section cov-deathcase-section uk-width-1-3 uk-card uk-card-default uk-card-body">
        <div class="cov-death-title uk-text-bold thai"> เสียชีวิตวันนี้ </div>
        <div class="cov-death-data"> ${covidDairyReport.new_death} <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-death-total thai"> เสียชีวิตสะสม :<span class="cov-death-total-data">
            ${covidDairyReport.total_death - 21698 }</span> <span class="cov-rai-unit-second">ราย</span></div>
      </div>
      <div class="cov-section cov-totalcase-section uk-width-1-2 uk-card uk-card-default uk-card-body">
        <div class="cov-total-title uk-text-bold thai"> ผู้ป่วยสะสม <span class="cov-totalcase-until"> ตั้งแต่ 1 มกราคม
            2565</span> </div>
        <div class="cov-total-data"> ${covidDairyReport.total_case - 2223435 } <span class="cov-rai-unit thai">ราย</span></div>
        <div class="cov-all_total thai"> ป่วยสะสมนับตั้งแต่การระบาดครั้งแรก <span class="cov-all_total-data">
            ${covidDairyReport.total_case}</span> <span class="cov-rai-unit-second">ราย</span></div>
      </div>
    </div>

    <div class="cov-left">
      <div class="cov-note thai"> หมายเหตุ : ข้อมูลตั้งแต่ 1 มกราคม 2565 </div>
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

