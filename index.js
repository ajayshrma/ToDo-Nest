function addTask() {
  let task_input = document.getElementById("taskInput");
  let tasktext = task_input.value.trim();

  let ul_List = document.getElementById("taskList");

  if (!tasktext == "") {
    //-------------------create Element & append to unorderd List (ul)-------------
    let li = document.createElement("li");

    li.append(tasktext);
    //--------------------------task_Done Button & append to list-------------------

    let task_done = document.createElement("button");
    task_done.innerHTML = "done";
    li.appendChild(task_done);
    task_done.style.marginLeft = "5%";
    task_done.addEventListener("click", function () {
      
      alert("Task Done");
      task_done.style.backgroundColor = "green";
    });

    //------------------delete Button element & append to list (li)--------------------

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Delete";

    removeButton.style.paddingLeft = "3%";

    li.appendChild(removeButton);

    removeButton.addEventListener("click", function () {
      ul_List.removeChild(li);
    });

    ul_List.appendChild(li);
    task_input.value = "";
  } else alert("field is empty");
}

function remove_list() {}
