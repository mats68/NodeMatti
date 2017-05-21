# Demo Server mit Node und Client mit create-react-app und MongoDB
* server in client/server.js
    * starten mit cd client && node server
    Port 3001
* create-react-app client
  * starten mit cd client && npm start
  Port 3000
* MongoDB auf mlab
* siehe https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50


# Debug
* in launch.json:
  Debug current file with  variables "program": "${file}"
  Shortcut für debug: Ctrl+h



# Git
* git to pull and push all branches
  git push --all origin
  And if you add -u once, e.g. git push --all origin -u, tracking is setup and after that you can simply use git push.
  - Do git checkout --detach before to the origin if there is error message 'cannot push'

* Create the branch on your local machine and switch in this branch :
  git checkout -b [name_of_your_new_branch]

* Change working branch :
  git checkout [name_of_your_new_branch]


  # mobx
  https://github.com/mobxjs/mobx/issues/521
  You can add the transform-decorators-legacy yourself in node_modules/react-scripts/config/babel.dev.js

# eval
   var meth = 'onShow() {alert("1a")}'
    var cl = '(class Neu {' + meth + '})';
    var k = eval(cl)
    var x = new (k)
    x.onShow()

# flattend structur of ui-data
- uischema.containers.form is entry point
- iterate over containers.fields
  - is either a container or a field
  - maybe no need to make array in formschema



UIschema = {
  containers: {
    "form": {
      label: "Kunden",
      type: "form",
      fields: ["name", "panel1"]
    },
    "panel1": {
      label: "Adresse",
      type: "panel",
      fields: ["plz", "ort", "tab"]
    },
    "tab": {
      label: "Interessen",
      type: "tabControl",
      fields: ["tab1", "tab2"]
    },
    "tab1": {
      label: "Hobbies",
      type: "tab",
      fields: ["Hobby1", "Hobby2"]
    },
    "tab2": {
      label: "Beruf",
      type: "tab",
      fields: ["Berufalt", "Berufneu"]
    },
    //containers = ["form","panel1",tab","tab1","tab2"]
  },
  fields: {
    name: {
      label: "Name"
    },
    plz: {
      label: "Ort"
    }
    ort: {
      label: "Ort"
    },
    Hobby1: {
      label: "Hobby1"
    },
    Hobby2: {
      label: "Hobby2"
    },
    Berufalt: {
      label: "Hobby2"
    },

  }
}

