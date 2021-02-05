import {Container, Row, CardDeck} from "reactstrap";
import { useEffect, useState } from "react";
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
        const {id, email, first_name, last_name} = ele;
        return <ProductCardComponent 
        id = {id} 
        key = {id}
        first_name = {first_name}
        last_name = {last_name}
        email = {email}/>
    });

    return(
        <div className="bg-secondary">
            <Container>
                <Row className= "mt-5 pt-5 mb-5 pb-5">
                    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>{productList}</CardDeck>
                </Row>
            </Container> 
        </div>
    );
}

export default ProductListContainer;
