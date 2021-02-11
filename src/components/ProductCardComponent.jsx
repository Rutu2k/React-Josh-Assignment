import { Card, CardBody, CardText, CardImg} from "reactstrap";

const ProductCardComponent = (props) => {
    const { email, first_name, last_name, avatar} = props;
    return (
        <Card className=" myCard shadow p-3 bg-white rounded" body color='Dark'>
            <CardBody>
                <CardImg src={avatar}/>
                <CardText>{last_name} {first_name}</CardText>
                <CardText>{email}</CardText>
            </CardBody> 
        </Card>
    );
}

export default ProductCardComponent;