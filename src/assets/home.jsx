import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdRestoreFromTrash } from "react-icons/md";
import { PiHardDrives } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { PiClockClockwiseBold } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import ProfilePicture from "./components/profile.jsx";
import profile from "./images/dog.jpg";
import logo from "./images/logonimo.png";
import { FiSearch } from "react-icons/fi";
const Home = () => {
  return (
    <Container fluid className=" home-container g-0 vh-100 text-white ">
      <Row className="vh-100 vw-100">
        <Col md={2} className=" sidenav">
          <div className="logo">
            <img src={logo} alt="" className="" />
          </div>
          <div>
            <button className="rounded-button">
              <HiOutlinePlus /> New
            </button>
          </div>
          <div className="cnavs mt-5">
            <div
              className="navs  d-flex flex-d-column  align-items-center mb-3 "
              tabindex="0"
            >
              <AiOutlineHome className="icon" />
              <label htmlFor="Home" className="home-label">
                Home
              </label>
            </div>
            <div
              className="navs  d-flex flex-d-column  align-items-center mb-3"
              tabindex="0"
            >
              <PiHardDrives className="icon" />
              <label htmlFor="Home" className="home-label">
                My Drive
              </label>
            </div>
            <div
              className="navs  d-flex flex-d-column  align-items-center mb-3"
              tabindex="0"
            >
              <BsPeople className="icon" />
              <label htmlFor="Home" className="home-label">
                Shared with me
              </label>
            </div>
            <div
              className="navs  d-flex flex-d-column  align-items-center mb-3"
              tabindex="0"
            >
              <PiClockClockwiseBold className="icon" />
              <label htmlFor="Home" className="home-label">
                Recent
              </label>
            </div>
            <div
              className="navs  d-flex flex-d-column  align-items-center mb-3"
              tabindex="0"
            >
              <MdRestoreFromTrash className="icon" />
              <label htmlFor="Home" className="home-label">
                Trash
              </label>
            </div>
          </div>
        </Col>
        <Col md={10} className="cover">
          <Row>
            <Col className="home-header d-flex align-items-center">
              <div className="searchbar w-50 d-flex flex-d-row  align-items-center ">
                <FiSearch />
                <input
                  type="text"
                  placeholder="type to search...."
                  className="search-input w-100"
                />
              </div>
              <ProfilePicture src={profile} altText="Profile Picture" />
            </Col>
          </Row>
          <Row>
            <Col className="body d-flex align-items-center">
              <h1 className="mt-3">Welcome to Drive</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
