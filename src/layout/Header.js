// @ts-nocheck
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import './Header.css'
import {setCurrentUser} from "../User/user.actions"

import {Link} from 'react-router-dom';
//import {UserContext} from '../context/UserContext';
import {connect} from "react-redux"

class Header extends React.Component {
  //  const context = useContext(UserContext)
    constructor(){
        super();
        this.state={
            isOpen:false
        }
    }
     toggle = () => this.setState((prevState)=>({isOpen:!prevState.isOpen}))
    render(){
    /*const [isOpen, setIsOpen] = useState(false)*/

    const {setCurrentUser}=this.props;
    return (
        <Navbar className="colour" light expand="md">
            <NavbarBrand ><Link to="/" className=" brand">GetoGit</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                    this.props.currentUser?.email ? this.props.currentUser.email : ""
                }
            </NavbarText>
        
            <NavbarToggler onClick={this.toggle} />
            <Collapse  isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto"  navbar>
                    {
                        this.props.currentUser ? (
                            <NavItem className="logout-box">
                                <NavLink onClick={() => {setCurrentUser(null)}} className="text-white">Sign-out</NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem className="boxxx">
                                <NavLink tag={Link} to="/signup" className="text-white boxx">
                                    SignUp
                                </NavLink>
                            </NavItem>
                            <NavItem className="boxxx">
                                <NavLink tag={Link} to="/signin" className="text-white boxx">
                                    SignIn
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}}
const mapStateToProps=({user})=>({
    currentUser:user.currentUser
})
const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);