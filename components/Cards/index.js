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

const cardsEntry = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log('got data', response);
        // console.log(response.data.articles);
        response.data.articles.bootstrap.forEach(i => {
            const newCard = createCard(i);
            cardsEntry.appendChild(newCard);
        })
        response.data.articles.javascript.forEach(i => {
            const newCard = createCard(i);
            cardsEntry.appendChild(newCard);
        })
        response.data.articles.jquery.forEach(i => {
            const newCard = createCard(i);
            cardsEntry.appendChild(newCard);
        })
        response.data.articles.node.forEach(i => {
            const newCard = createCard(i);
            cardsEntry.appendChild(newCard);
        })
        response.data.articles.technology.forEach(i => {
            const newCard = createCard(i);
            cardsEntry.appendChild(newCard);
        })
    })
    .catch(error => {
        console.log('broken', error);
    })

const createCard = function(data) {
    // create elements
    const 
    card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorImg = document.createElement('img'),
    authorName = document.createElement('span');
    // assign classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    // content
    headline.textContent = data.headline;
    authorImg.src = `${data.authorPhoto}`;
    authorName.textContent = data.authorName;
    // structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    return card
};

