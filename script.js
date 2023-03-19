var idx = 0;

function addTaskEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    document.getElementById("btn-submit").click();
  }
}

function changeTheme() {
  const theme = document.getElementById("float-btn");
  const addtaskContainer = document.getElementById("theme-container");
  theme.style.backgroundColor = "blue";
  addtaskContainer.style.backgroundColor = "grey";
  console.log(addtaskContainer.style.backgroundColor);
  if (addtaskContainer.style.backgroundColor == "white") {
    addtaskContainer.style.backgroundColor = "grey";
  }
}

function addTask() {
  const addtext = document.getElementById("add-text");
  var listTasks = document.querySelector(".ulclass");
  var addbutton = document.querySelector("#btn-submit");
  if (!document.getElementById("add-text").value) {
    alert("Input a Task!");
  } else {
    idx = idx + 1;
    var li = document.createElement("li");
    const a = document.createElement("a");
    var text = addtext.value;
    a.innerText = text;
    const btnDel = document.createElement("button");
    const btnEdite = document.createElement("button");
    const div = document.createElement("div");
    div.setAttribute("class", "btns");
    btnDel.setAttribute("class", "btn-dist-delete");
    btnDel.setAttribute("onclick", "deleteTask(event)");
    btnDel.setAttribute("id", "btnDelete_" + idx.toString());
    btnEdite.setAttribute("class", "btn-dist-edit");
    btnEdite.setAttribute("onclick", "editTask(event)");
    btnEdite.setAttribute("id", "btnEdit_" + idx.toString());
    btnEdite.innerText = "Edite";
    btnDel.innerText = "Delete";
    li.appendChild(a);
    li.setAttribute("class", "liclass");
    div.appendChild(btnEdite);
    div.appendChild(btnDel);
    li.appendChild(div);
    li.setAttribute("id", "li_" + idx.toString());
    listTasks.appendChild(li);
  }
}

function deleteTask(e) {
  let elem_del_id = e.srcElement.id;
  const id_del = elem_del_id.split("_");
  const elem_del = document.getElementById("li_" + id_del[1]);
  elem_del.remove();
}

function editTask(e) {
  let elem_edit_id = e.srcElement.id;
  const id_edit = elem_edit_id.split("_");
  const elem_edit = document.getElementById("li_" + id_edit[1]);
  var editedTask = prompt("Edite the task:");
  elem_edit.children[0].innerHTML = editedTask;
}
