const taskInput = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");

// \u00d7 this is the x character in unicode
function addTask(){
    if(taskInput.value === ''){
        alert('have to add task first')
    }else{
    let li = document.createElement('li');
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    span.className = 'close';
    }
    taskInput.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();
