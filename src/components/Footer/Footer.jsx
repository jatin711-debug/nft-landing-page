import SocialMedia from '../SocialMedia/SocialMedia';
const Footer = () => {
    return (
      <div data-aos="fade-down" className="foot">
        <hr/>
        <div className="footer-container">
          <div className="footer-about">
            <h1>About</h1>
            <p>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code.</p>
          </div>
          <div className="footer-products">
            <h1>Links</h1>
            <SocialMedia />
          </div>
        </div>
        <hr/>
      </div>  
    );
}

export default Footer;
