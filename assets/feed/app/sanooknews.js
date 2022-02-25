let barurl = 'https://www.posttoday.com/rss/src/breakingnews.xml';
const textarea_bar = document.querySelector('#feed-textarea-newsbar > ul');


feednami.load(barurl)
  .then(feed => {
    textarea_bar.value = ''
    console.log(feed);
    for (let entry of feed.entries) {

      
      let li = document.createElement('li');
     
      li.innerHTML = `
      <span class="uk-label"> NEWS </span>
      <a href="${entry.link}" class="uk-text-default-barc uk-ext-rss-layout uk-text-emphasis uk-link-heading">&nbsp;  ${entry.description}
       </a>*** &nbsp;&nbsp;&nbsp;&nbsp;
         
      `;
      //append HTML content to list 
      textarea_bar.appendChild(li);
    }
  });
