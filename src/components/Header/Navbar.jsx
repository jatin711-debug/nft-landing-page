import SocialMedia from "../SocialMedia/SocialMedia";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
            <SocialMedia/>
                <div className="navbar-logo" data-aos="fade-right">
                    <img src="https://johnny-buck.s3.us-west-2.amazonaws.com/logo_final.gif" alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;