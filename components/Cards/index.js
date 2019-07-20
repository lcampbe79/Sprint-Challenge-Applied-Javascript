// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const newArticleCard = document.querySelector('.cards-container');
//newArticleCard.appendChild(newArticleCardComponent())

const articleCard = axios.get('https://lambda-times-backend.herokuapp.com/articles')

articleCard
.then(data => {
    console.log(data)
    for(topic in data.data.articles) {
        //console.log(topic)
        data.data.articles[topic].forEach(article => {
            const createNewCard = newArticleCardComponent(article);
            newArticleCard.appendChild(createNewCard)  
        }); 
    }
})
.catch(error => {
  //handles failure:(handler)
  console.log('ERROR:', error)
})

function newArticleCardComponent(article) {
    console.log(article)
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = article.headline;
    author.textContent = article.authorName;
    imgContainer.textContent = article.authorPhoto;


    return card;
    
}