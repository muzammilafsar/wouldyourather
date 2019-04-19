import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

import Header from './Header';
class App extends Component {
  componentDidMount() {
    let data = [{id:1,name:"abcd"},{id:2,name:"amul"},{id:3,name:"chandra"},{id:2,name:"vikash"},{id:3,name:"gupta"}];
    let data1 = [{id:1,name:"abcd"},{id:2,name:"amul,vikash"},{id:3,name:"chandra,gupta"}];
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={() => {
          
          return (
            !this.props.auth ? <Login /> : 
            <Switch>
              <Route path="/" render={() => {
                return(
                  <Header />
                )
              }} ></Route>
            </Switch>
          )
        }} />
      </BrowserRouter>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    auth: state.auth.authStatus
  }
}
export default connect(mapStatetoProps)(App);
