let turl = 'https://blog.kasidate.me/feedsposts/default';
const div = document.querySelector('#feed-timer > div');

feednami.load(turl)
  .then(feed => {
    textarea.value = ''
    console.log(feed);
    for (let entry of feed.entries) {

      let div = document.createElement('li');
      //add HTML content to list items
      div.innerHTML = `
      ${entry.categories}
    `;
      //append HTML content to list 
      div.appendChild(code);
    }
  });