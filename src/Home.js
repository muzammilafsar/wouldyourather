import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
// import { _getQuestions, _getUsers } from './_DATA';
import { connect } from 'react-redux';
import VoteCard from './common/VoteCard';
import { getQuestions } from './store/actions/question.action';
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '2',
            questions: {},
            users: {}
        }
    }
    componentDidMount() {
        this.props.getQuestions();
        // this.getUsers();
    }
    // getUsers=() => {
    //             _getUsers().then(val => {
    //                 this.setState({ users: val })
    //             })

    // }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
        // _getUsers().then(val =>{
        //     console.log(val[this.props.authData.id].answers);
        // })
    }
shouldComponentUpdate(next) {
    return true;
}
    render() {
        let answered = Object.values(this.props.questions).filter(ques => {
            let found = false;
            Object.keys(this.props.authData.answers).map(val => {
                if (ques.id === val) {
                    found = true;
                }
                return val;
            });
            return found;
        });
        let unanswered = Object.values(this.props.questions).filter(ques => {
            let found = true;
            Object.keys(this.props.authData.answers).map(val => {
                console.log(ques.id , val);
                if (ques.id === val) {
                    found = false; 
                }
                return val;
            });
            return found;
        });
        console.log(answered.length, unanswered.length);
        return (
            <div>
                {/* {JSON.stringify( this.props.authData.answers)} */}
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Answered Questions
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Unanswered Questions
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <Row>
                            {answered.map(val => {
                                return (<Col sm="6" key={val.id}>
                                    <VoteCard users={this.props.users} question={val} click={() => {this.getUsers()}} key={val.id+'a'} authData={this.props.authData} answered={true} />
                                </Col>)
                            })
                            }
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            {unanswered.map(val => {
                                return (<Col sm="6" key={val.id}>
                                   <VoteCard users={this.props.users} question={val} click={() => {this.getUsers()}} key={val.id+'un'} authData={this.props.authData} answered={false}/>
                                </Col>)
                            })
                            }
                        </Row>
                    </TabPane>
                </TabContent>
            
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        authData: state.auth.authData,
        questions: state.ques.questions,
        users: state.auth.users
    }
}
// const mapDispatchToprops = () => {
//     return {
//         getQuestions: getQuestions
//     }
// }
export default connect(mapStatetoProps, {getQuestions})(Home);