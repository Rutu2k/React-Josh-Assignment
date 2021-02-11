import {Container, Row, CardDeck} from "reactstrap";
import { useEffect, useState } from "react";
import { Nav, NavItem, NavLink} from 'reactstrap';
import ProductCardComponent from "../components/ProductCardComponent";

//import jsonData from "../product.json";
const axios = require('axios').default;

const ProductListContainer = (props) => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            setUserList(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
    },[]);

    const productList = userList.map((ele) => {
        const {id, email, first_name, last_name, avatar} = ele;
        return <ProductCardComponent 
        id = {id} 
        key = {id}
        first_name = {first_name}
        last_name = {last_name}
        email = {email}
        avatar = {avatar}/>
    });

    return(
        <div className="bg-secondary">
            <h1 className="text-white text-center p-4">Welcome User!</h1>
            <Nav className="d-flex justify-content-xl-center">
                <NavItem className="bg-white mt-2 shadow rounded">
                    <NavLink className="text-dark">Logout</NavLink>
                </NavItem>
            </Nav>
            <Container>
                <Row className= "mt-2 pt-5 mb-5 pb-5">
                    <CardDeck>{productList}</CardDeck>
                </Row>
            </Container> 
        </div>
    );
}

export default ProductListContainer;
