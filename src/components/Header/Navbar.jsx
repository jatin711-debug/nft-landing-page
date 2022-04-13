import SocialMedia from "../SocialMedia/SocialMedia";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo" data-aos="fade-right">
                    <h1>Logo</h1>
                </div>
            </div>
            <SocialMedia/>
        </div>
    );
}

export default Navbar;