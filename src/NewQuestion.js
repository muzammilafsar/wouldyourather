import React,{useState} from 'react';
import {Card, Button} from 'reactstrap';
import { saveQuestion } from './store/actions/question.action';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
class NewQuestion extends React.Component {
    state = {
        option1: '',
        option2: ''
    }
    setOption(key, value) {
        if(key === '1') {
            this.setState({option1: value});
        } else {
            this.setState({option2: value});
        }
    }
    saveQuestion = () => {
        console.log("working",this.props);
        if(this.state.option1 !== '' && this.state.option2!== '' ) {
            let question =
            {
                optionOneText: this.state.option1,
                optionTwoText: this.state.option2,
                author: this.props.authData.id
            }
            this.props.dispatch(saveQuestion(question));
            this.props.history.push('/');
        }
    }
    render () {
        return (
            <div className="row">
            <div className="col">
                <Card>
                    <div>Would you Rather</div>
                    <div><input id="option1" value={this.state.option1} onChange={(e) => {this.setOption('1', e.target.value)}}></input></div>
                    <div>OR</div>
                    <div><input id="option2" value={this.state.option2} onChange={(e) => {this.setOption('2', e.target.value)}}/></div>
                    <div><Button onClick={this.saveQuestion} disabled={this.props.loader}>Save</Button></div>
                </Card>
            </div>
            </div>
        );
    }
}
const mapStatetoprops = (state) => {
    return {
        loader: state.ui.loader,
        authData: state.auth.authData
    }
}
export default connect(mapStatetoprops)(withRouter(NewQuestion));