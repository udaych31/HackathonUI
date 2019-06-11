import React from 'react';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import AccountDetails from './Components/AccountDetails';
import FundTransfer from './Components/FundTransfer';
import './App.css';

function App() {
  return (
    <div className="App">
       <HashRouter>
        <div className="middle">
          <div className="title"><Header/></div>
          <Route path='/' component={Login} exact></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home/:accNo' component={Home}></Route>   
          <Route path='/accDetails' component={AccountDetails}></Route>
          <Route path='/fundTransfer/:accNum' component={FundTransfer}></Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
