import { GoLinkExternal } from "react-icons/go";

const redirectTo = () => {
    window.open("https://www.opensea.io/");
}

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-video" data-aos="fade-up">
                    <video autoPlay muted loop src="https://johnny-buck.s3.us-west-2.amazonaws.com/rec.mp4" />
                    <div className="visit-btn" onClick={redirectTo}>
                        <GoLinkExternal/>
                    </div>
                </div>
                <div className="main-text" data-aos="fade-down">
                    <h1>Grab Your Coins on OpenSea Right Now !!!</h1>
                </div>
            </div>
        </div>
    );
}

export default Main;
