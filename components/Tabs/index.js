// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//node lists
const topics = document.querySelector('.topics');
const tabs = document.querySelector('.tabs');

//=========AXIOS GET, THEN/CATCH, CREATE ARRAY FROM AXIOS DOM TOPICS, LOOP ARRAY
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
    //   console.log(response)

     // 1\LOOP ARRAY,
     // 2. TO APPEND CONSTRUCTOR FUNCTION TO THE DOMHTMLMARKUP,
     // 3. FOR EACH PARAMETER ,
      topicsArray = response.data.topics;
      topicsArray.forEach(item => {
        // console.log(item);
        topics.appendChild(Topics(item))
      })
  })

  .catch(error => {
    console.log('404: No data available', error);
  })

//========CONSTRUCTOR TO ADD 1. HTML MARKUP 2. CLASS NAMES 3. CONTENT 4. RETURN HTML
function Topics(data) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = data;

  return tab;
}
// // APPEND  
// topics.append(Topics());





// //Create Function
// function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph) {
//     // 1. Create HTML markup:
//      const constructorArticle = document.createElement('div');
//      const constructorTitle = document.createElement('h2');
//      const constructorDate = document.createElement('p');
//      const constructorP1 = document.createElement('p');
//      const constructorP2 = document.createElement('p');
//      const constructorP3 = document.createElement('p');
//      const constructorButton = document.createElement('span');
   
//     // 2. Define HTML structure:
//      constructorArticle.append(constructorTitle, constructorDate, constructorP1, constructorP2, constructorP3, constructorButton);
   
//     // 3. Add some class names:
//      constructorArticle.classList.add('article');
//      constructorDate.classList.add('date');
//      constructorButton.classList.add('expandButton');
   
//    // 4. Add some content!:
//      constructorTitle.textContent = title;
//      constructorDate.textContent = date;
//      constructorP1.textContent = firstParagraph;
//      constructorP2.textContent = secondParagraph;
//      constructorP3.textContent = thirdParagraph;
//      constructorButton.textContent = 'click here';
//      // Step 2: Add an event listener to the expandButton span. 
//      // This event listener should toggle the class 'article-open' on the 'article' div.
//      constructorButton.addEventListener('click', e => {
//        constructorArticle.classList.toggle('article-open');
//        // ??? PETAR WHY NO ARTICLE CLOSE?
//      });   
   
   
    
//    // 5. Return: 
//    //Step 3: return the entire component.
//      return constructorArticle;
//    }
   

   
//    //-----Append Manual and Loop------
//    const body = document.querySelector('body');
//    console.log(body);
//    // // Append Manual:
//    //   function appendbody(title, date) {
//    //     body.append(createArticle(data.title, 'date', 'firstParagraph', 'secondParagraph', 'thirdParagraph'));
//    //   };
//    //   appendbody();
   
//    // Append Loop

   // 1\LOOP ARRAY 
   // 2. TO APPEND CONSTRUCTOR FUNCTION TO THE DOMHTMLMARKUP
   // 3. FOR EACH PARAMETER 
   // 
    //  data.forEach((data => {
    //        body.append(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph));
    //      }))