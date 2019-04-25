import React from 'react';
import {Card} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class ViewPoll extends React.Component {
    state ={
        question_id: '',
        vote_1: null,
        vote_2: null
    }
    componentWillMount() {
        this.setState({question_id: this.props.match.params.id});
    }
    render() {
        try {
            let per =  (this.state.vote_1 === 0 || (this.state.vote_1 + this.state.vote_2 === 0)) ? 0: this.state.vote_1/(this.state.vote_1+this.state.vote_2)*100;
            let per2 =  (this.state.vote_2 === 0 || (this.state.vote_1 + this.state.vote_2 === 0)) ? 0: this.state.vote_2/(this.state.vote_1+this.state.vote_2)*100;
            return (
                <Card>
                <div>
                    {/* {JSON.stringify(this.props.users[this.props.questions[this.props.match.params.id].author].avatarURL)} */}
                    Author: {this.props.users[this.props.questions[this.props.match.params.id].author].name}
                    <img alt={this.props.users[this.props.questions[this.props.match.params.id].author].name} src={this.props.users[this.props.questions[this.props.match.params.id].author].avatarURL} style={{width: '50px', height:'auto'}} />
                    <div>Would you Rather</div>
                    <div>{this.props.questions[this.props.match.params.id].optionOne.text}:  {per}%  </div>
                    <div>{this.props.questions[this.props.match.params.id].optionTwo.text}:  {per2}% </div>
    
                </div>
                </Card>
            );
        } catch (err) {
            this.props.history.push("/404");
        }

    }
}
const mapStatetoProps=(state) => {
    return {
        questions: state.ques.questions,
        users: state.auth.users,
        loader: state.ui.loader
    }
}
export default connect(mapStatetoProps,{})(withRouter(ViewPoll));