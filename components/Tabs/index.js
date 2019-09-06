// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsEntry = document.querySelector('.topics');

const topicsArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response);
        response.data.topics.forEach(i => {
            topicsArray.push(i);
            // console.log(topicsArray);
        })
        topicsArray.forEach(topic => {
            const newTopic = document.createElement('div');
            newTopic.classList.add('tab');
            newTopic.textContent = topic;
            tabsEntry.appendChild(newTopic);
            // console.log(tabsEntry);
        })
    })
    .catch(error => {
        console.log('broken')
    })

// console.log(topicsArray);

