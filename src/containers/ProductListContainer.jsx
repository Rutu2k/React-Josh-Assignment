import { withRouter } from "react-router-dom";
import {Container, Row, CardDeck} from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCardComponent from "../components/ProductCardComponent";
import { productListAction } from "../actions/loginActions";
const axios = require('axios').default;

const ProductListContainer = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.productListReducer);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            dispatch(productListAction(response.data.data));
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
    },[dispatch]);

    const productList = result.userlist.map((ele) => {
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
        <div className="bg-white">
            <Container>
                <Row className= "mt-2 pt-5 mb-5">
                    <CardDeck>{productList}</CardDeck>
                </Row>
            </Container> 
        </div>
    );
}

export default withRouter(ProductListContainer);
