// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabComponent = document.querySelector('.topics');

const topicTab = axios.get('https://lambda-times-backend.herokuapp.com/topics')

topicTab
.then(data => {
    data.data.topics.forEach(item => {
        const newTopic = newTopicComponent(item);
        tabComponent.appendChild(newTopic);
    }) 
})
.catch(error => {
  console.log('There was an error: ', error);
})

function newTopicComponent(topic) {
    const newTabclass = document.createElement('div');

    newTabclass.classList.add('tab');

    newTabclass.textContent = topic;
    
    return newTabclass;
}
