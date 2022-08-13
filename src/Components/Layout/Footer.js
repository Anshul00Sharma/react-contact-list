import React from "react";

// footer for credits and copyright information
const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p>Designed and Developed by Anshul</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
