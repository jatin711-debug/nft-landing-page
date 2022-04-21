import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "aos/dist/aos.css";
import AOS from "aos";
import CoinComponent from './components/Coin/CoinComponent';
import Main from './components/Main/Main';

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    return (
        <div>
            <Header />
            <Main/>
            <div className="coin-component-container" >
                <CoinComponent source="https://johnny-buck.s3.us-west-2.amazonaws.com/coward+(1).gif"/>
                <CoinComponent source="https://johnny-buck.s3.us-west-2.amazonaws.com/scooby-2+(1).gif"/>
                <CoinComponent source="https://johnny-buck.s3.us-west-2.amazonaws.com/coin-c.gif"/>
            </div>
            <Footer />
        </div>
        );
  }
