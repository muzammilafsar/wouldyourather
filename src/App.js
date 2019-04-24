import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import Home from './Home';
import NewQuestion from './NewQuestion';
import ViewPoll from './ViewPoll';
import { withRouter } from 'react-router-dom';
class App extends Component {
  componentWillMount() {
    this.props.history.push("/");
  }
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
            <React.Fragment>

                <Header />
              <Switch>
                <Route exact path="/" render={() => {
                  return(
                <Home />

                  )
                }} ></Route>
                  <Route exact path="/leaderboard" render={() => {
                  return(
                    <LeaderBoard />
                  )
                }} ></Route>
                   
                   <Route exact path="/newquestion" render={() => {
                  return(
                    <NewQuestion />
                  )
                }} ></Route>
                 <Route exact path="/poll/:id" component={ViewPoll}></Route>
              </Switch>
            
            </React.Fragment>
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
export default connect(mapStatetoProps)(withRouter(App));
