import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from '@mui/material/Container'

import Navbar from './components/navigation/Navbar';
import Login from './components/navigation/Login';
import Signup from './components/navigation/Signup';
import ForgotPassword from './components/navigation/ForgotPassword';

import CreateIssue from './components/issue/CreateIssue';
import ListIssues from './components/issue/ListIssues';
import ListSingleIssue from './components/issue/ListSingleIssue';
import UpdateIssue from './components/issue/UpdateIssue';
import DeleteIssue from './components/issue/DeleteIssue';

import CreateProject from './components/project/CreateProject';
import ListProjects from './components/project/ListProjects';
import ListSingleProject from './components/project/ListSingleProject';
import UpdateProject from './components/project/UpdateProject';
import DeleteProject from './components/project/DeleteProject';

import CreateUser from './components/user/CreateUser';
import ListUsers from './components/user/ListUsers';
import ListSingleUser from './components/user/ListSingleUser';
import UpdateUser from './components/user/UpdateUser'
import DeleteUser from './components/user/DeleteUser'
import Sidebar from './components/navigation/Sidebar';

function App() {
  
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* <Sidebar /> */}

    {/* Main area */}
      
      {/* auth routes */}
      <Container maxWidth="md" sx={{minWidth: 1000}} disableGutters>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Signup} />
          <Route path="/password/forgot" exact component={ForgotPassword} />
        </Switch>

        {/* Issue routes */}
        <Switch>
          <Route path="/issue/create" exact>
            <CreateIssue name="testing props" />
          </Route>
          <Route path="/issue/list" exact component={ListIssues} />
          <Route path="/issue/:id" exact component={ListSingleIssue} />
          <Route path="/issue/:id/update" exact component={UpdateIssue} />
          <Route path="/issue/:id/delete" exact component={DeleteIssue} />
        </Switch>
        
        {/* project routes */}
        <Switch>
          <Route path="/project/create" exact>
            <CreateProject name="testing props" />
          </Route>
          <Route path="/project/list" exact component={ListProjects} />
          <Route path="/project/:id" exact component={ListSingleProject} />
          <Route path="/project/:id/update" exact component={UpdateProject} />
          <Route path="/project/:id/delete" exact component={DeleteProject} />
        </Switch>

        <Switch>
          <Route path="/user/create" exact>
            <CreateUser />
          </Route>
          <Route path="/user/list" exact component={ListUsers} />
          <Route path="/user/:id" exact component={ListSingleUser} />
          <Route path="/user/:id/update" exact component={UpdateUser} />
          <Route path="/user/:id/delete" exact component={DeleteUser} />
        </Switch>

      </Container>
     
    </div>
  );
}

export default App;
