import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './components/projects/Projects.jsx';
import Login from './components/auth/Login.jsx';
import NewAccount from './components/auth/NewAccount.jsx';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState.js';
import AlertState from './context/alerts/alertState.js';
import AuthState from './context/auth/authState.js';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/new-account" component={NewAccount}/>
                <Route exact path="/projects" component={Projects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
