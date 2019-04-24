import React from 'react';
import {Card} from 'reactstrap';
import { connect } from 'react-redux';
class ViewPoll extends React.Component {
    render() {
        console.log(this.props);
        let vote_1 = this.props.questions[this.props.match.params.id].optionOne.votes.length;
        let vote_2 = this.props.questions[this.props.match.params.id].optionTwo.votes.length;
        let per =  (vote_1 === 0 || (vote_1 + vote_2 === 0)) ? 0: vote_1/(vote_1+vote_2)*100;
        let per2 =  (vote_2 === 0 || (vote_1 + vote_2 === 0)) ? 0: vote_2/(vote_1+vote_2)*100;

        return (
            <Card>
            <div>
                {JSON.stringify(this.props.questions[this.props.match.params.id])}
                <div>Votes</div>
                <div>{this.props.questions[this.props.match.params.id].optionOne.text}:  {per}%  </div>
                <div>{this.props.questions[this.props.match.params.id].optionTwo.text}:  {per2}% </div>

            </div>
            </Card>
        );
    }
}
const mapStatetoProps=(state) => {
    return {
        questions: state.ques.questions
    }
}
export default connect(mapStatetoProps,{})(ViewPoll);