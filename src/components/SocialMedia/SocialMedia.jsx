import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className="social" data-aos="fade-down">
            <ul>
              <li><a href="/#"><FaTwitter/></a></li>
              <li><FaDiscord/></li>
              <li><FaInstagram/></li>
            </ul>
        </div>
    )
}

export default SocialMedia;
