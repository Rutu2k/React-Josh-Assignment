import {Container} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap';

const HeaderComponent = () => {
    const history = useHistory();

    const toHome = () => {
        history.push("/home")
    }

    const toLogin = () => {
        history.push("/login")
    }

    const toUsers = () => {
        history.push("/userlist")
    }

    return(
        <Container fluid={true} className = " bg-dark text-center">
            <Navbar>
                <NavbarBrand className = " shadow p-2 m-2 text-success">Josh Software</NavbarBrand>
            <Nav>
                <NavItem className = " mt-2">
                    <NavLink className = "myNavLink shadow p-2 m-2 text-white" onClick = {toLogin}>Login</NavLink>
                </NavItem>
                <NavItem className = "mt-2">
                    <NavLink className = " myNavLink shadow p-2 m-2 text-white" onClick = {toHome}>Home</NavLink>
                </NavItem>
                <NavItem className = "mt-2">
                    <NavLink className = " myNavLink shadow p-2 m-2 text-white" onClick = {toUsers}>Users</NavLink>
                </NavItem>
            </Nav>
            </Navbar>
            <h2 className="text-white text-center pb-4">Welcome User!</h2>
        </Container>
    );
}

export default HeaderComponent;