document.getElementById("push").onclick = function() {

    let inputBox = document.getElementById("input1");
    let tasks = document.getElementById("tasks");

    if (inputBox.value == "") {
        alert("enter a task");
    } 
    else {

        // create task div
        let task = document.createElement("div");
        task.className = "task";

        // create text span
        let text = document.createElement("span");
        text.innerText = inputBox.value;

        // edit 
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        // create delete button
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        // delete event
        delBtn.onclick = function() {
            tasks.removeChild(task);
        }
        
        // EDIT event
        // editBtn.onclick = function() {
        //     let newValue = prompt("Edit task:", text.innerText);
        //     if (newValue !== null && newValue !== "") {
        //         text.innerText = newValue;
        //     }
        // };
        editBtn.onclick = function(){
            let newValue = prompt("edit task",text.innerText)
            if(newValue !=null && newValue !==""){
                text.innerText = newValue
            }
        }

        // append
        task.appendChild(text);
        task.appendChild(editBtn);
        task.appendChild(delBtn);
        tasks.appendChild(task);

        inputBox.value = "";
    }
};
