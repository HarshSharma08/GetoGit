// @ts-nocheck
import React from 'react';
import {Card, CardBody} from 'reactstrap';

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4 " style={{boxShadow: "5px 5px 5px #1da7dd"}} >
            <img src={user.avatar_url} alt="User not found" className="img-responsive"/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info">Available for hire: {user.hireable ? 'YES':'Nope'}</div>
                <div className="text-info">Followers: {user.followers}</div>
                <div className="text-info">Following: {user.following}</div>
                <div className="text-info">Repositories:{user.public_repos}</div>
            </CardBody>
            <CardBody style={{backgroundColor:"transparent", border:"None"}}>
            <br/>
                
                
                
                
            <br />
            </CardBody>
        </Card>
    )
}

export default UserCard;