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
