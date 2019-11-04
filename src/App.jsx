
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import Home from './componentes/contenido/Home'
import Login from './componentes/login/Login'

import './css/App.css'


class App extends Component {


  render() {
    return (
        <div className="full">
          <Route path="/login" component={Login}/>
          <Route exact path="/" render={() => (
            <Redirect
              to='/login'
            />
          )}
          />
          <Route path="/home" component={Home}/>
        </div>
    )
  }
}



export default (App);
