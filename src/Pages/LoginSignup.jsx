import React from "react";
import "./CSS/LoginSignup.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginSignup = () => {
  return (
    <div className="loginsignup d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <div className="loginsignup-container">
              <h1 className="text-center">Sign Up</h1>

              <Form className="loginsignup-fields">
                <Form.Control type="text" placeholder="Your Name" />
                <Form.Control type="email" placeholder="Email Address" />
                <Form.Control type="password" placeholder="Password" />
              </Form>

              <Button className="loginsignup-button w-100 mt-4">
                Continue
              </Button>

              <p className="loginsignup-login text-center mt-3">
                Already have an account? <span>Login here</span>
              </p>

              <div className="loginsignup-agree mt-4 d-flex align-items-start gap-2">
                <input type="checkbox" />
                <p className="mb-0">
                  By continuing, I agree to the terms of use & privacy policy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginSignup;
