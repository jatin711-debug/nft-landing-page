import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <div className="footer-about">
            <h1>About</h1>
            <p>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code.</p>
          </div>
          <div className="footer-products">
            <h1>Products</h1>
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
            </ul>
          </div>
          <div className="footer-links">
            <h1>Links</h1>
            <ul>
              <li><FaGithub/></li>
              <li><FaYoutube/></li>
              <li><FaInstagram/></li>
            </ul>
          </div>
        </div>
      </>  
    );
}

export default Footer
