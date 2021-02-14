
const axios = require('axios').default;

export const LoginAPI = ({result,history}) => {
    console.log("in loginapi");
    axios.post('https://reqres.in/api/login' , {
        email: result.email,
        password: result.password
    }).then((response) => {  
        console.log(response);
        if(response.status === 200){
            console.log("in login");
            history.push("/userlist");
        }
        else{
            alert("Wrong credentials");
        }
    }, (error) => {
    alert("Invalid credentials");
    console.log(error);
    });
}