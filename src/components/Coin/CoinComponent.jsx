const source = 'https://johnny-buck.s3.us-west-2.amazonaws.com/coin.gif';
const MediaComponent = () => {
    return (
        <div className="coin-container">
            <img src={source} alt="logo" />
        </div>
    )
}

export default MediaComponent;
