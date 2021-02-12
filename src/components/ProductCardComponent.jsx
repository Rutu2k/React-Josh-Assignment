import { Card, CardBody, CardText, CardImg} from "reactstrap";

const ProductCardComponent = (props) => {
    const { email, first_name, last_name, avatar} = props;
    return (
        <Card className=" myCard shadow p-2 m-2 bg-light rounded" body color='Dark'>
            <CardImg src={avatar}/>
            <CardBody>
                <CardText>{last_name} {first_name}</CardText>
                <CardText>{email}</CardText>
            </CardBody> 
        </Card>
    );
}

export default ProductCardComponent;