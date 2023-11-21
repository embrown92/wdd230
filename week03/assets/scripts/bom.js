const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
});

/* Declare an array named chaptersArray and assign it to the 
results of a defined function named getChapterList*/

let chaptersArray = getChapterList() || [];

/*
Use a forEach on the chaptersArray to process each entry named 
chapter. Use an arrow function within the loop to call a new 
defined function named displayList and pass it the argument 
of chapter. That way each entry will be processed, i.e., 
appended to the list.
*/
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') { // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input

    }
})

// Create the displayList defined function that receives one parameter named item.
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width: fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from te array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
};

// Define the setChapterList function to set the localStorage 
// item that you have already named. Use JSON.stringify() to stringify the array.

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

// Define the getChapterList function to get the localStorage 
// item. No parameter is needed. Since this function returns 
// to an awaiting array, we will need to use JSON.parse on the 
// string.

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

// Finally, define the deleteChapter function with a parameter named chapter that does three things.
function deleteChapter(chapter) {
    // reformat the chapter parameter to get rid of the ❌ that 
    // is passed on the end of the chapter string when we called 
    // the deleteChapter function. Use string.slice() method to 
    // extract the last character.
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

    // redefine the chaptersArray array using the array.filter method to return everything 
    // except the chapter to be removed.
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Call the setChapterList function to update the localStorage item.
    setChapterList();
}


