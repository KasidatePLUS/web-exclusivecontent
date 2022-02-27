let ecosurl = 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.economic.xml';
const textarea_eco = document.querySelector('#feed-textarea-eco > ul');

feednami.load(ecosurl)
  .then(feed => {
    textarea_eco.value = ''
    console.log(feed);
    for (let entry of feed.entries) {

      //create a list element
      let li = document.createElement('li');
      //add HTML content to list items
      li.innerHTML = `
    
    <div class="uk-flex-middle uk-text-top" uk-grid uk-card uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
 
        <div class="uk-width-2-3@m uk-text-default uk-text-top uk-text-normal thai  uk-link-heading" uk-scrollspy-class="uk-animation-slide-top">
             <a href="${entry.link}" > <span class="uk-label uk-label-danger">ECONOMIC</span> <br>
             ${entry.title}
             </a>
        </div>
         <div class="uk-width-1-3@m uk-flex-first">
        <img src="${entry.enclosures[0].url}" alt="Image">
         </div>
    </div>
  
      `;
      //append HTML content to list 
      textarea_eco.appendChild(li);
    }
  });