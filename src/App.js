import React from 'react';
import Home from './components/StudentClassroom/Home';
import Header from './components/Classroom/Header';
import Classroom from './components/Classroom/Classroom';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Classroom" component={Classroom} />
      </Switch> 
    </>
  );
}


export default App;
