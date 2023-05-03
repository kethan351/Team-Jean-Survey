import React from 'react';
import './App.css';
import Header from './components/Header';
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Formheader from './components/Formheader';
import CenterTabs from './components/CenterTabs';
import Question_form from './components/Question_form';
import Userform from './components/UserForm';
import AxiosTest from './components/AxiosTest';
import AxiosPost from './components/AxiosPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form/:id">
            <Formheader />
            <CenterTabs />
            <Question_form/>
          </Route>
          <Route path="/response">
            <Userform/>
          </Route>
          <Route path="/form">
            <Redirect to="/"/>
          </Route>
          <Route path="/test">
            <div>
         <AxiosTest/>
         <AxiosPost/>
            </div>
          </Route>
          <Route path="/">
            <Header />
            <Template />
            <Mainbody />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;