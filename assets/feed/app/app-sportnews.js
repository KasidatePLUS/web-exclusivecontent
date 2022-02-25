let sporturl = 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.sport.xml';
const wsport = document.querySelector('#feed-textarea-sport > ul');
feednami.load(sporturl)
  .then(feed => {
    wsport.value = ''
    for (let entry of feed.entries) {
      console.log(feed);
      
      //create a list element
      let li = document.createElement('li');
      //add HTML content to list items
      li.innerHTML = `
    
    <div class="uk-flex-middle" uk-grid uk-card uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
 
        <div class="uk-width-2-3@m uk-text-default uk-text-normal thai uk-link-heading" uk-scrollspy-class="uk-animation-slide-top">
             <a href="${entry.link}" > <span class="uk-label uk-label-danger">SPORT</span><br>
             ${entry.title}
             </a>
        </div>
         <div class="uk-width-1-3@m uk-flex-first">
        <img src="${entry.enclosures[0].url}" alt="Image of ${entry.title}">
         </div>
    </div>
   
      `;
      //append HTML content to list 
      wsport.appendChild(li);
    }
  });