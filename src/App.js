import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Console from './components/Console/Console';
import Login from './components/Login/Login';
import store from './redux/store';

function App() {
  return (
    <HashRouter>
    	<Provider store={store}>
	      <div className="App">
	        <Route exact path="/" render={() => <Console />} />
	        <Route path="/console" render={() => <Console />} />
	        <Route path="/login" render={() => <Login />} />
	      </div>
	     </Provider>
    </HashRouter>
  );
}

export default App;
