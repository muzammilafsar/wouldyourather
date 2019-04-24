import React, { useState, useEffect } from 'react';
import { Card, CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../store/actions/question.action';
import { Link} from 'react-router-dom';
class VoteCard extends React.Component {
    state = {
        option: false,
        changes: false
    };
    componentDidMount() {
        if (this.props.question.optionOne.votes.findIndex(val => val === this.props.authData.id) > -1) {
            this.setState({ option: true })
        } else if (this.props.question.optionTwo.votes.findIndex(val => val === this.props.authData.id) > -1) {
            this.setState({ option: false })
        }
    }
    answerChange = (ans) => {
        this.setState({ changes: true });
        if (ans === '1') {
            this.setState({ option: true })
        } else {
            this.setState({ option: false })
        }
    }
    saveAnswer = () => {
        if (this.state.changes) {
            this.props.saveQAnswer({
                answer: this.state.option ? 'optionOne' : 'optionTwo',
                qid: this.props.question.id,
                authedUser: this.props.authData.id
            });
        }
        console.log(this.state.optionOne, this.state.optionTwo);

    }
    render() {
        return (
            <Card body>
                <CardTitle>{this.props.users[this.props.question.author] ? this.props.users[this.props.question.author].name : ''}</CardTitle>
                <div>
                    <div>Would You Rather {this.state.optionOne} {this.state.optionTwo}</div>
                    <div>
                        <div>
                            <input type="radio" name={`users_${this.props.question.id}`} value={'1'} onChange={(e) => this.answerChange(e.target.value)} checked={!this.props.answered && !this.state.changes ? false : this.state.option} />{this.props.question.optionOne.text}<br />
                            <input type="radio" name={`users_${this.props.question.id}`} value={'2'} onChange={(e) => this.answerChange(e.target.value)} checked={!this.props.answered && !this.state.changes ? false : !this.state.option} />{this.props.question.optionTwo.text}<br />
                        </div>
                    </div>
                </div>
                <Button onClick={() => { this.saveAnswer() }}>Take Vote</Button>
                <Link to={`/poll/${this.props.question.id}`}><Button> View Poll</Button></Link>
            </Card>

        );
    }
}
const mapStatetoProps = (state) => {
    return {
        loader: state.ui.loader
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        saveQAnswer: (data) => {dispatch(saveQuestionAnswer(data))}
    };
}
export default connect(mapStatetoProps, mapDispatchtoProps)(VoteCard);