import {Container, Card, CardBody, CardText, CardHeader, CardImg } from "reactstrap";
const UserProfileComponent = () => {

    const id = localStorage.getItem("id");
    const first_name = localStorage.getItem("first_name");
    const last_name = localStorage.getItem("last_name");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
    //console.log(id,first_name,last_name,email);
    return(
    <Container>
        <Card  className=" shadow p-3 mb-5 bg-white rounded" body color='Dark' style={{ width: '100%' }}>
            <CardHeader>{first_name}</CardHeader>
            <CardBody>
                <CardImg src = {photo}></CardImg>
                <CardText>{id} </CardText>
                <CardText>{last_name} {first_name}</CardText>
                <CardText>{email}</CardText>
            </CardBody> 
        </Card>
        </Container>
    );
    
  }
  
export default UserProfileComponent;
  