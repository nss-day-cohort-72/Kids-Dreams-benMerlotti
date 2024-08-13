# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module contains the code that will execute. The event listener is waiting for a click. It will store the element that was clicked on in a variable if the element has a specified dataset. Then using other dataset information "data-name" and "data-wish" it will display an alert in the window with the message. 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The function must be invoked inside the `for...of` loop because it is going to be using the iterated kid object as an argument for the `findCelebrityMatch()` function. The function needs to iterate over all the kid objects to match the corresponding celebrityId property with the correct celeb.id from the copied celebrity objects that is also being iterated over in the `findCelebrityMatch()` function. This way we can iterate through two objects and find the matching properties. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > We have to store the `sport` property in the dataset so that it can be accessed directly from the click event. Once the list item is clicked on, it and all of its datasets are stored in a variable and we can use the information in the dataset to inform our conditional that says "if item is clicked, then window alert this specific information from the dataset that was clicked."
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > First we import the functions that create html lists from our modules. Then we access our DOM element and store it in a variable called mainContainer. Next we write our html using template literals and insert the expressions which are the invoked functions that we imported earlier. These will generate the html lists we need. All of this is stored in a variable called applicationHTML. Then using .innerhtml we set the applicationHTML equal to mainContainer which inserts our html into the DOM.
