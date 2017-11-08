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
        "deadline"   : 1510136545,
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
        "done_on"    : 1510136575,
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
  //console.log(task);
    if (task.done_on === null) {
      // is a to do task
      let node = document.createElement('li'); //create a <li>
      node.className = "list-item";
      let textnode = document.createTextNode(task.title); // create text
      node.appendChild(textnode); //append the text to the node <li>
      document.getElementById("todo").appendChild(node);

    } else {
      // task is done
      if (task.done_on <= task.deadline) {
        // task done on time


      } else {
        //task done late
      }


    }
}
//
const app = function(data) {
  let nickname = data.user[0].name;
  setUser(nickname);

// task
  let tasks = data.task;
  for (let i in tasks) {
    setTask(tasks[i])
  }
}
// APP
app(getData());
