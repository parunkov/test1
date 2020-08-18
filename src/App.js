import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Console from './components/Console/Console';
import Login from './components/Login/Login';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" render={() => <Console />} />
        <Route path="/console" render={() => <Console />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </HashRouter>
  );
}

export default App;
