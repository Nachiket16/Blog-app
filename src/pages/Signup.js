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
const Signup = () => {
  return (
    <Base>
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col sm={{size:6,offset:3}}>
            <Card>
              <CardHeader
                style={{ textAlign: "center", backgroundColor: "darkcyan" }}
              >
                Sign up
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      id="name"
                    ></Input>
                  </FormGroup>
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
                    <Button color="dark" outline>Register</Button>
                    <Button color="secondary" type="reset" outline className="ms-2">Reset</Button>
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
