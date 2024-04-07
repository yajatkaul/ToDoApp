const InputField = document.querySelector(".search-bar");
const taskbox = document.getElementById("list-cont");

function addTask(){
    if(InputField.value === ""){
        alert("Empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputField.value;
        taskbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
}

taskbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);