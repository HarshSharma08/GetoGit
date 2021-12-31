import React from 'react';
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from 'reactstrap';

import firebase from 'firebase/app';
//import {UserContext} from '../context/UserContext';
import {Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import {connect} from "react-redux"
import {setCurrentUser} from "../User/user.actions"

class Signup extends React.Component {

    /*const context = useContext(UserContext)

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')*/
	constructor(){
		super();
		this.state={
			email:"",
			password:""
		}
	}

     handleSignUp = () => {
		 const {email,password}=this.state;
		 const {setCurrentUser}=this.props;
        firebase 
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then( res => {
                console.log(JSON.stringify(res));
                //context.setUser({email: res.user.email, uid: res.user.uid})
			setCurrentUser({
				     uid:res.user.uid,
					 email:res.user.email,
					 password:res.user.password
			})
			})
            .catch(error => {
                console.log(error);
                toast(error.message, {
                    type: "error",
                    position: "bottom-right"
                })
            })
    }

     handleSubmit = e => {
        e.preventDefault()
        this.handleSignUp()
    }
    render(){
    if (this.props.currentUser) {
        return <Redirect to="/" />
    }  
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
					<div className="box background" >
						<Form onSubmit={this.handleSubmit}>
							<CardHeader className=''>SignUp Here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='Provide your email'
											value={this.state.email}
											onChange={e => this.setState({email:e.target.value})}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='Your password here'
											value={this.state.password}
											onChange={e => this.setState({password:e.target.value})}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign Up
								</Button>
							</CardFooter>
						</Form>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);

}}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(Signup);