"use strict";


// DATA MANAGEMENT
// get data
function getData() {
  let data = {
    "user" : [
      {
        "name"     : "john",
        "email"    : "johnsmith@matrix.com",
        "password" : "sjdnc54ffdf22",
        "task"     : [0,1]
      }

    ],

    "task" : [
      {
        "title"      : "Faire à manger",
        "created_on" : 1510136545,
        "deadline"   : 1510136045,
        "done_on"    : 1510136545,
        "user"       : [0]
      },
      {
        "title"      : "Faire la vaisselle",
        "created_on" : 1510136545,
        "deadline"   : 1510136545,
        "done_on"    : 1510136545,
        "user"       : [0,1]
      },
      {
        "title"      : "Sortir les poubelles",
        "created_on" : 1510136545,
        "deadline"   : 1510136545,
        "done_on"    : null,
        "user"       : [0]
      }
    ]
  }
  return data;
}
// update data
function updateData() {

}
function setUser(nickname) {
  document.getElementById("nickname").innerHTML = nickname;
}

function setTask(task) {

  function taskIsDone() {
    return task.done_on != null;
  }


  // let status = "todo";
  let status = taskIsDone() ? (task.done_on <= task.deadline? "done" : "late" ) : "todo";
  // if (taskIsDone()) {
  //   // task is done
  //   if (task.done_on <= task.deadline) {
  //     // task done on time
  //     status ="done";
  //   } else {
  //     //task done late
  //     status = "late";
  //   }
  //
  // } else {
  //
  //   status = "todo";
  //
  // }
  //console.log(status);
  display(status);





    function display(status) {
      let node = document.createElement('li'); //create a <li>
      node.className = "list-item";
      node.deadline = task.deadline;
      let textnode = document.createTextNode(task.title); // create text
      node.appendChild(textnode); //append the text to the node <li>
      document.getElementById(status).appendChild(node); // append the node <li> to the element #todo
    }
}

function endTask(e) {
  console.log(this.deadline);
  let now = Math.floor(Date.now() / 1000);
  let deadline = this.deadline;
  let status = null;
  console.log(now);

  if (deadline >= now) {
    status =document.getElementById("done");
  } else {
    status =document.getElementById("late");
  }
  status.appendChild(this);

  //todo.removeChild(this)
}

// APP
const app = function(data) {
  // user
  let nickname = data.user[0].name;
  setUser(nickname);

// task
  let tasks = data.task;
  for (let i in tasks) {
    setTask(tasks[i]);
  }
  // Event Listener
  let todo = document.getElementById("todo");
  //console.log("TODOBLOCK HTML #todo");
  //console.log(todo);

  let todoItems = todo.getElementsByClassName("list-item");
  //console.log("TODO Childs");
  //console.log(todoItems);
  //console.log(todoItems);

  let i = 0;
  while ( todoItems[i] ) {
  //  console.log("ITEM");
  //  console.log(todoItems[i]);
    todoItems[i].addEventListener( "click", endTask );
    i++;
  }
}
// APP
app(getData());
