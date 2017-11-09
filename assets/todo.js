"use strict";


// DATA MANAGEMENT
// get data
/*function getData() {
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
app(getData());*/

let App = {
	config : {
		"nickname" : null,
		"task" : []
	},
	setTask : function(taskID){
		let now  = Math.floor(Date.now() / 1000);
		this.task[taskID].done_on = now;
	},
	start : function(){
		console.log('Starting Application');

		// Adding nickname to html
		let n = document.getElementById("nickname");
			n.innerHTML = this.config.nickname;

		let i = 0;
		while (this.config.task[i]){

			let t = this.config.task[i];
			let status = t.done_on != null ? ( t.done_on <= t.deadline ? "done" : "late" ) : "todo";

			let htmlElem = document.createElement('li'); // Create a <li>
			htmlElem.className = "list-item";
			htmlElem.ID = t.ID;
			htmlElem.deadline = t.deadline;
			let textHtmlElem = document.createTextNode(t.title); // Create a text
			htmlElem.appendChild(textHtmlElem); // Append the text to the node <li>
			document.getElementById(status).appendChild(htmlElem); // Append the node <li> to element #todo

			i++;
		}
	}
}

App.config.nickname = 'John';
App.config.task = [
	{
		"title" 		: "Faire Ã  manger",
		"created_on" 	: 1510180290,
		"deadline"		: 1510180457,
		"done_on"		: null
	},
	{
		"title" 		: "Regarder la tv",
		"created_on" 	: 1510156092,
		"deadline"		: 1510156192,
		"done_on"		: null
	}
]
App.start();
