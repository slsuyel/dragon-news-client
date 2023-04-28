import React from "react";
import bgaad from '../../assets/bg1.png'
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle ,FaGithub,FaFacebookF,FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from "../Qzone/Qzone";
const RightNav = () => {
  return (
   <div>
     <div>
      <h4>login with</h4>
      <Button variant="outline-primary" className="mb-2"><FaGoogle/>Login with google</Button>
      <Button variant="outline-secondary" className="mb-2"> <FaGithub/> Login with gitHub</Button>
    </div>
    <div>
        <h4>Find us on </h4>
    <ListGroup>
      <ListGroup.Item><FaFacebookF/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Facebook</ListGroup.Item>
    
    </ListGroup>
    </div>
    <Qzone/>
    <div className="my-2">
        <img src={bgaad} alt="" />
    </div>
   </div>
  );
};

export default RightNav;
