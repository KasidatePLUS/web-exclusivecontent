let url = 'https://www.tmd.go.th/xml/region_daily_forecast.php?RegionID=7';
const textarea = document.querySelector('#feed-textarea > ul');


feednami.load(url)
  .then(feed => {
    textarea.value = ''
    console.log(feed);
    for (let entry of feed.entries) {


      //create a list element
      let li = document.createElement('li');
      //add HTML content to list items
      li.innerHTML = `
      
      <div class="uk-card uk-card-default uk-card-body uk-ext-margin15 uk-contmar uk-animation-toggle " tabindex="0" >
      <img src="${entry.image.url}" class="uk-ext-margin10"> 
      <span class="uk-label uk-ext-z1 uk-ext-textmargin3 uk-text-bold uk-animation-shake"><span uk-icon="tag" > </span> ${entry.categories}</span> 
       <a href="${entry.link}" class="uk-ext-z1 uk-link-heading uk-animation-scale-up">  ${feed.meta.title} &nbsp; ${entry.title} >>>&nbsp; &nbsp; 
       </a> 
         
      </div>`;
     
      textarea.appendChild(li);
    }
  });






const date = new Date();

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
    "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
    "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
}
let today = new Date();
let date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

console.log(toThaiDateString(date));