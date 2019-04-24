import React, { Component } from 'react';
import './css/Login.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { _getUsers } from './_DATA';
import {connect } from 'react-redux';
import { setLoader } from './store/actions/ui.action';
import { setAuth, setAuthData } from './store/actions/auth.action';
 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      users: {}
    };
  }
  componentDidMount() {
    _getUsers().then(val => {
      this.setState({users: val});
      console.log(val);
    })
  }

  toggle=()=> {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  login = (user) => {
      this.props.setAuthData(user);
      this.props.setAuth(true);

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="login col-md-4 col-sm-12">
            <div className="login-title">Welcome to Would You Rather App</div>
            <div>
              <div className="login-img"><img alt="image" style={{ width: '100%' }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbAZaucd7UhbAi1ngthd8Ckn7zt3NSxYAWdgfWqFBAg76Hh1Q'} /></div>
              <div className="login-msg">LogIn As</div>
            </div>
            <div>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="dropdown-button">
                  Select User
                </DropdownToggle>
                <DropdownMenu className="dropdown-button">
                {Object.values(this.state.users).map((user, i) => {
                  return (
                    <React.Fragment key={i}>
                    <DropdownItem onClick={() =>{this.login(user)}} ><span>{user.name}{i < Object.keys(this.state.users).length}</span></DropdownItem>
                    {i < Object.keys(this.state.users).length - 1 ? <DropdownItem divider /> : ''}
                    </React.Fragment>
                  )
              })}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
const mapStatetoProps = (state) => {
  return {
    loader: state.ui.loader,
    authStatus: state.auth.authStatus,
    authData: state.auth.authData
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    setLoader: (data) => dispatch(setLoader(data)),
    setAuth: (data) => dispatch(setAuth(data)),
    setAuthData: (data) => dispatch(setAuthData(data))
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Login);