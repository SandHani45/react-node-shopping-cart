import React from 'react'
import { Switch,Route } from 'react-router-dom';
//components
import Dashboard from './components/dashboard';
import Layout from './hoc/Layout';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//Containers
import Home from './container/home';
//provite routes
import PravitRoute from './hoc/PravitRoute';

const Routes = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}  />
          <Route path='/user/dashboard' exact component={PravitRoute(Dashboard,true)}/>
          <Route path='/register' component={PravitRoute(Register,false)}  />
          <Route path='/login' component={PravitRoute(Login,false)}  />
        </Switch>
      </Layout> 
    </div>
  )
}


export default Routes;
