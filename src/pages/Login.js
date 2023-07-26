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
const Login = () => {
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
                <Form>
                  <FormGroup>
                    <Label for="name">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="dark" outline>
                      Login
                    </Button>
                    <Button color="warning" outline className="ms-2">
                      Signup
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
