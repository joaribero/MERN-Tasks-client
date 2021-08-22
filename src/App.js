import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './components/projects/Projects.jsx';
import Login from './components/auth/Login.jsx';
import NewAccount from './components/auth/NewAccount.jsx';
import ProjectState from './context/projects/projectState';

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/new-account" component={NewAccount}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
