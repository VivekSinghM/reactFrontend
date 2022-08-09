import React, { useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bill from './component/Bill/Bill';
import DineIn from './component/DashBoard/DineIn';
import Header from './component/header/Header';
import Login from './component/Login';
import Menu from './component/menu/Menu';
import OrderItems from './component/orderItems/OrderItems';
import { Auth } from './context/AuthProvider';

function App() {
  const {isAuth}= useContext(Auth)
  return (
    <>
      {<Header auth={isAuth}/>}
      <Switch>
        <Route path="/home" component={Menu}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/yourOrder" component={OrderItems}></Route>
        <Route path="/order" component={OrderItems}></Route>
        <Route path="/bill" component={Bill}></Route>
        {/* {!isAuth && <Route path="/home" ><Redirect to='/login'/></Route>} */}
        {!isAuth && <Route path="/dashboard" ><Redirect to='/login'/></Route>}
        {isAuth && <Route path="/dashboard" component={DineIn}></Route>}
        {isAuth && <Route path="/login"><Redirect to='/dashboard'/></Route>}
        <Route path="/login" component={Login}></Route>
        <Route exact path="/"> <Redirect to='/home'/> </Route>
      </Switch>
    </>
  );
}

export default App;