// @ts-nocheck
import React from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import "./Home.css";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
//import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import {connect} from "react-redux"

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      query:"",
      user:null
    }
  }
   
 // const context = useContext(UserContext);
 
  /*const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);*/
  
   fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${this.state.query}`);
      this.setState({user:data});
      console.log({ data });
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  //Put Anypage behind login
  render(){
  const {user}=this.state;
  if (!this.props.currentUser) {
    return <Redirect to="/signin" />;
  }

  return (
    
    <Container>
      
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={this.state.query}
              onChange={e => this.setState({query:e.target.value})}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button type="submit" style={{width:"auto",height:"38px"}} onClick={this.fetchDetails} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
      <div className="svg">
      </div>
    </Container>
  );
}}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
export default connect(mapStateToProps)(Home);
