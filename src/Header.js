import React, { useState } from 'react';
import BarLoader from './common/BarLoader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { setAuth, setAuthData } from './store/actions/auth.action';
const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    function logout() {
        props.setAuth();
        props.setAuthData();
    }
    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
            <Link className="navbar-brand" to="">Would You Rather</Link>
                <NavbarToggler onClick={setToggle} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <Link className="nav-link" to="/newquestion">New Question</Link>
                        </NavItem>
                        <NavItem>

                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink > Hi, {props.authData.name}</NavLink>
                           
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logout}>Logout</NavLink>
                        </NavItem>
                      </Nav>
                </Collapse>
            </Navbar>
            <BarLoader status={props.loader} />
        </React.Fragment>
    );
}
const mapStatetoProps = (state) => {
    return {
        loader: state.ui.loader,
        authData: state.auth.authData
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth(false)),
        setAuthData: () => dispatch(setAuthData({}))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Header);