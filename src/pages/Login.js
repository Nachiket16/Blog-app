import { useState } from "react";
import Base from "../component/Base";
import {
    Card,
    CardBody,
    CardHeader,
    Container,
    FormGroup,
    Label,
    Form,
    Input,
    Button,
    Row,
    Col
  } from "reactstrap";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
const Login = () => {

  const[loginDetail,setLoginDetail]=useState({
    username:'',
    password:''
  })

  const handleChange=(event,field)=>{
    let actualValue= event.target.value
    setLoginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  } 

  const handleFormSubmit=(evet)=>{
    evet.preventDefault();
    console.log(loginDetail);
    if(loginDetail.username.trim()==''|| loginDetail.password.trim()==''){
      toast.error('username or password is required')
      return;
    }
    //Submit the data to server if not blank
    loginUser(loginDetail).then((data)=>{
      console.log(data)
      //Save the data to the local storage 
      doLogin(data,()=>{
        console.log("login detail is saved to local-storage")
      })
      toast.success("Login Success")
    }).catch(error=>{
      console.log("error catch "+ error)
      if(error.response.status==400||error.response.status==404){
        toast.error(error.response.data.message) 
      }else{
        toast.error("Something went wrong") 
      }
    })
  }

  const handleReset=() =>{
    setLoginDetail({
      username:"",
      password:"",
    })
  }

  return (
    <Base>
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader
                style={{ textAlign: "center", backgroundColor: "darkcyan" }}
              >
                Login
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e)=> handleChange(e,'username')}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e)=> handleChange(e,'password')}
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="dark" outline>
                      Login
                    </Button>
                    <Button onClick={handleReset} color="warning" outline className="ms-2">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
