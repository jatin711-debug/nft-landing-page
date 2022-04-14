const Main = () => {
    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-video" data-aos="fade-up">
                    <video defer autoPlay loop src="https://johnny-buck.s3.us-west-2.amazonaws.com/rec.mp4" />
                </div>
                <div className="main-text" data-aos="fade-down">
                    <h1>Grab Your Coins on OpenSea Right Now !!!</h1>
                </div>
            </div>
        </div>
    );
}

export default Main;
