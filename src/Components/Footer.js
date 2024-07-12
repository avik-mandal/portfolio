import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Avik Mandal</h4>
      <h4>Copyright &copy; 2024 AM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/avik-mandal" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/avik-mandal-a901b7294" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:avikmandal2022@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer