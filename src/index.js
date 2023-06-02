const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('button');

//EVENT LISTENER
button.addEventListener('click', addTask);
listContainer.addEventListener('click', deleteTask)


//FUNCTION

//Add task
function addTask(){
    if(inputBox.value ===''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value=''
    saveData();//Makes sure data is saved after changes
}

//Check and Delete task
function deleteTask(e){
    if(e.target.tagName === 'LI'){  //if li element is clicked then .checked in css will be applied 
        e.target.classList.toggle('checked');
        saveData();//Makes sure data is saved after changes
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();//if span element is clicked then the parent element (LI) will be removed
        saveData();//Makes sure data is saved after changes
    }
} false;

//Saves data of the listContainer innerHTML
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

//Get all content stored in the browser with the name of 'data'
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()