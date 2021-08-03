document.addEventListener('DOMContentLoaded', init);

const init = () => {fetchArticles};

const fetchArticles = () => {
    fetch('https://spaceflightnewsapi.net/api/v2/articles')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }