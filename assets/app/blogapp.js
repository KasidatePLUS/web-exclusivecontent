let blogurl = 'https://blog.kasidate.me/feeds/posts/default';
const textareablog = document.querySelector('#feed-textarea-blog > ul');

feednami.load(blogurl)
  .then(feed => {
    textareablog.value = ''
    console.log(feed);
    for (let entry of feed.entries) {
      let li = document.createElement('li');
      li.innerHTML = `
      <div class="uk-card uk-card-default uk-card-body uk-ext-margin15 uk-contmar uk-animation-toggle thai" tabindex="0" >
      <img src="${entry.image.url}" class="uk-ext-margin10"> 
      <span class="uk-label uk-ext-z1 uk-ext-textmargin3 uk-text-bold uk-animation-shake"><span uk-icon="tag" > </span> ${entry.categories}</span> 
       <a href="${entry.link}" class="uk-ext-z1 uk-link-heading uk-animation-scale-up">  ${feed.meta.title} &nbsp; ${entry.title} &nbsp; &nbsp; 
       </a>
      </div>`;
     
      textareablog.appendChild(li);
    }
  });
