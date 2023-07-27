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
import Base from "../component/Base";
import { useEffect, useState } from "react";
import {signUp} from "../services/user-service"
const Signup = () => {

  const[data,setData]=useState({
    name:'',
    email:'',
    password:'',
    about:'',
     
  })

  const [error,setError] = useState({
    errors:{},
    isError:false
  })

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }
  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:'',
    })
  }

  const submitForm=(event)=>{
    event.preventDefault()
    //validate data
      console.log(data);
    //send data to api
  }
 
  return (
    <Base>
      <Container style={{ marginTop: "5%" }}>
        {JSON.stringify(data)}
        <Row>
          <Col sm={{size:6,offset:3}}>
            <Card>
              <CardHeader
                style={{ textAlign: "center", backgroundColor: "darkcyan" }}
              >
                Sign up
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      id="name"
                      onChange={(e)=>handleChange(e, 'name')}
                      value={data.name}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      onChange={(e)=>handleChange(e, 'email')}
                      value={data.email}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      onChange={(e)=>handleChange(e, 'password')}
                      value={data.password}
                    ></Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">About</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{height:"250px"}}
                      onChange={(e)=>handleChange(e, 'about')}
                      value={data.about}
                    ></Input>
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark" outline>Register</Button>
                    <Button onClick={(e)=>resetData()} color="secondary" type="reset" outline className="ms-2">Reset</Button>
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

export default Signup;
