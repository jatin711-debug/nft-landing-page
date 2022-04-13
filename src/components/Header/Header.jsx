import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <div className="company" data-aos="fade-up">
                <h1>The Coin Company</h1>
            </div>
        </div>
    );
}

export default Header
