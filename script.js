const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // if user try to add without writting anything.
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    // task mentioned is listed inside the list-container.
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // cross icon in the span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // to remove the written list after adding the list.
    inputBox.value = "";
    saveData();
}

// for click function

listContainer.addEventListener("click", function(e){
    // after clicking li it should check class name 
   if(e.target.tagName === "LI"){
    // if checked class is already there then it should remove it
     e.target.classList.toggle("checked");
     saveData();
   }
//    if clicked target element is in span then it will delete parentelement
   else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
     saveData();
   }
}, false);

// to store the data after refresh

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

// display the data whenever we open the site again

function showTask(){
    listContainer.innerHTML = loacalStorage.getItem("data");
}
showTask();