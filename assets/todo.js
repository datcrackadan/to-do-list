"use strict";



function getData() {
  let data = {
    "user" : [
      {
        "name"     : "john",
        "email"    : "johnsmith@matrix.com",
        "password" : "sjdnc54ffdf22",
        "task"     : [0,1]
      },
      {
        "name"      : "carlos",
        "email"     : "carlos@loscar.com",
        "password"  : "iofin45jhujv4dsidnhj",
        "task"      : [1,2]
      }
    ],

    "task" : [
      {
        "title"      : "Faire à manger",
        "created-on" : /*timestamp*/,
        "deadline"   : /*timestampe*/,
        "done"       : false,
        "done-on"    : null,
        "user"       : [0]
      },
      {
        "title"      : "Faire la vaisselle",
        "created-on" : /*timestamp*/,
        "deadline"   : /*timestampe*/,
        "done"       : false,
        "done-on"    : null,
        "user"       : [0,1]
      },
      {
        "title"      : "Sortir les poubelles",
        "created-on" : /*timestamp*/,
        "deadline"   : /*timestampe*/,
        "done"       : false,
        "done-on"    : null,
        "user"       : [1]
      }
    ]
  }
  return data;
}

function updateData() {
  
}

const app = function(data) {

}

app(getData());
