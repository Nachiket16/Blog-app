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
  Col,
  FormFeedback,
} from "reactstrap";
import Base from "../component/Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    //validate data

    console.log(data);
    //send data to api
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("Success log");
        toast.success(
          "User is registered successfully with user id : " + resp.id
        );
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //Handle Exception
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
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
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    ></Input>
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    ></Input>
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">About</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "100px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    ></Input>
                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark" outline>
                      Register
                    </Button>
                    <Button
                      onClick={(e) => resetData()}
                      color="secondary"
                      type="reset"
                      outline
                      className="ms-2"
                    >
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

export default Signup;
