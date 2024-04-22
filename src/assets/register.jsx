import React, { useState } from "react";
import "./login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import Logo from "./images/logonimo.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = () => {
    const userData = {
      email,
      password,
      conpassword,
    };
    console.log(userData);
  };
  return (
    <Container fluid className="g-0 vh-100 text-white ">
      <Row>
        <Col className="header  d-flex align-items-center">
        <img src={Logo} alt="Logo" className="logo"/>
          <label htmlFor="AppName" className="appName">Cloud Cache</label>
        </Col>
      </Row>
      <Row className="body vh-100 d-flex ">
        <div className="form d-flex flex-column align-items-center mt-5">
          <div className=" sign-in mb-5">
            <h1>Sign up</h1>
          </div>
          <div className="field d-flex df-column mb-5">
            <FloatLabel>
              <label htmlFor="Email" className="text-white">
                Email
              </label>
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatLabel>
          </div>
          <div className="field d-flex df-column mb-5">
            <FloatLabel>
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <Password
                feedback={false}
                toggleMask
                tabIndex={1}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatLabel>
          </div>
          <div className="field d-flex df-column mb-3">
            <FloatLabel>
              <label htmlFor="conpassword" className="text-white">
                Confirm Password
              </label>
              <Password
                feedback={false}
                toggleMask
                tabIndex={1}
                value={conpassword}
                onChange={(e) => setConpassword(e.target.value)}
              />
            </FloatLabel>
          </div>
          <div className="w-50 mt-3 d-flex justify-content-center mb-3">
            <Button
              className="rounded-pill w-50"
              label="register"
              severity="secondary"
              rounded
              onClick={handleLogin}
            />
          </div>
          <div>
            <label className="text-center">
              Don't have an account yet?
              <a
               onClick={()=>navigate('/Login')}
                className="text-decoration-none  fw-bold"
              >
                {" "}
                Sign up
              </a>
            </label>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Register;
