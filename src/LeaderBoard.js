import React, { useEffect, useState } from 'react';
import { _getUsers, _getQuestions } from './_DATA';
import {
    Card,  CardText, CardBody, 
    CardTitle, CardSubtitle
} from 'reactstrap';
const LeaderBoard = () => {
    const [users, setUsers] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        _getUsers().then(val => {
            console.log("works", Object.values(val));
            setUsers(Object.values(val));
        })
        _getQuestions().then(val => {
            // questions = Object.values(val);
            setQuestions(Object.values(val));
        })
    }, {})
    return (
        <div className="row">
            {
                users.map((val, i) => {
                    return (
        <div className="col-md-3 col-sm-12">
                        <Card>
                            <CardBody>
                                <CardTitle>{val.name}</CardTitle>
                                <CardSubtitle>Total Points :  {Object.keys(val.answers).length + val.questions.length}</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={val.avatarURL} alt={"Card image cap"+ i} />
                            <CardBody>
                                <CardText><div>Answered Questions: {Object.keys(val.answers).length}</div>
                                <div>Created Questions: {val.questions.length}</div></CardText>
                            </CardBody>
                        </Card>
        </div>
                    );
                })
            }

    
        </div>
    );
}
export default LeaderBoard;