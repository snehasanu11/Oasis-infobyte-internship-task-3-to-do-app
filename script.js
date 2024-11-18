
function addItem() {
    let input = document.getElementById("input");
    let taskText = input.value.trim();

    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    
    let li = document.createElement("li");

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove(); 
    });

    
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    li.appendChild(deleteBtn);

    
    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    
    input.value = "";
}
