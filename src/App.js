import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DineIn from './component/DineIn';
import Header from './component/header/Header';
import Home from './component/Home'
import Login from './component/Login';
import { Auth } from './context/AuthProvider';

function App() {
  const {isAuth}= useContext(Auth)
  console.log(isAuth)
  return (
    <>
      {isAuth &&<Header/>}
      <Switch>
        {!isAuth && <Route path="/home" ><Redirect to='/login'/></Route>}
        {isAuth && <Route path="/home" component={Home}></Route>}
        {!isAuth && <Route path="/dashboard" ><Redirect to='/login'/></Route>}
        {isAuth && <Route path="/dashboard" component={DineIn}></Route>}
        {isAuth && <Route path="/login"><Redirect to='/dashboard'/></Route>}
        <Route path="/login" component={Login}></Route>
        <Route exact path="/"> <Redirect to='/login'/> </Route>
      </Switch>
    </>
  );
}

export default App;