function addTask() {
    
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText == ""){
        alert ("Please enter a task!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = taskText;
    

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = function(){
        let newTask = prompt("Edit your task :", li.firstChild.testContent);
        if(newTask !== null && newTask !== "") 
        {
            li.firstChild.textContent = newTask;
        }
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function(){
        li.remove();
    };
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}