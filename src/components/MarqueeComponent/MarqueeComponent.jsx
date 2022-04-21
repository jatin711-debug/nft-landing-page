import Marquee from "react-fast-marquee";

const MarqueeComponent = ({children}) => {
    return (
        <Marquee speed={20} direction="left">
            {children}
        </Marquee>
    );
}

export default MarqueeComponent
