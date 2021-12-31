/* eslint-disable jsx-a11y/accessible-emoji */
// @ts-nocheck
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, )

    return (
        <ListGroup >
            {repos.map(repo => (
                <ListGroupItem key={repo.id} style={{boxShadow: "5px 5px 5px #1da7dd",marginBottom:"10px"}}>
                    <div className="text-primary font-weight-bold">📘{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
            <ListGroupItem style={{backgroundColor:"transparent", border:"None"}}>
                <br/>
                
                
                
                
                <br />
            </ListGroupItem>
        </ListGroup>
    )
} 

export default Repos;