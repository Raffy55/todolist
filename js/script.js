let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTask);

var date = new Date();
document.getElementById("dateNow").innerHTML = date;

function addTask() {
    // get value from input
    let taskName = document.querySelector("#taskName").value;

    // get parent node
    let taskList = document.querySelector("#taskList");

    //create child nodes
    let taskItem = document.createElement("div");
    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.setAttribute("disabled", "");
    taskInput.value = taskName;
    taskInput.defaultValue = taskName;

    // create edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

     // create delete button
     let deleteBtn = document.createElement("button");
     deleteBtn.textContent = "Delete";
     deleteBtn.classList = "deleteBtn";
     deleteBtn.addEventListener("click", delValue);

    // append child nodes
    taskList.appendChild(taskItem);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    function editValue() {
        // remove disabled attribute
        taskInput.removeAttribute("disabled", "");

        //disable edit button to avoid multiple save buttons
        editBtn.setAttribute("disabled", "");

        // create save btn
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        // append save btn
        taskItem.appendChild(saveBtn);

        function saveValue() {
            let text = "Are you sure you want to make changes to this task?";

            if(confirm(text) == true) {

            // enable edit button again
            editBtn.removeAttribute("disabled", "");

            // get new value
            let newValue = taskInput.value;
            taskInput.default = newValue;

            // disable input type
            taskInput.removeAttribute("disabled", "");

            // hide save btn
            taskItem.removeChild(saveBtn);


            // add text to alert
            text = "Saved successfully";
            
            }

            else {
                text = "Cancelled";

                // disable input type
                taskInput.removeAttribute("disabled", "");

                // hide save btn
                taskItem.removeChild(saveBtn);

                taskInput.value = taskInput.defaultValue;
            }
            alert(text);
        }
    }

    function delValue() {
        
        taskList.removeChild(taskItem);
        addTaskBtn.removeAttribute("disabled", "");

    }

    if(taskList.childElementCount >= 5){

        // disable add button
        addTaskBtn.setAttribute("disabled", "");

        alert("You have reached the limit of 5 tasks! Delete tasks to give room for more.");
     }

}