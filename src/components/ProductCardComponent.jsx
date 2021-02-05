import { Card, CardBody, CardText, CardHeader} from "reactstrap";

const ProductCardComponent = (props) => {
    const {id, email, first_name, last_name} = props;
    return (
        <Card  className=" shadow p-3 mb-5 bg-white rounded" body color='Dark' style={{ width: '100%' }}>
            <CardHeader>{first_name}</CardHeader>
            <CardBody>
                <CardText>{id} </CardText>
                <CardText>{last_name} {first_name}</CardText>
                <CardText>{email}</CardText>
            </CardBody> 
        </Card>
    );
}

export default ProductCardComponent;