import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <div className="company" data-aos="fade-up">
                <h1>The Coin Company</h1>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header
