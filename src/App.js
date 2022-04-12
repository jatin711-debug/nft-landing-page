import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoinComponent from './components/Coin/CoinComponent';

export default function App() {
    return (
        <div>
            <Header />
            <div className="coin-component-container" >
                <CoinComponent/>
                <CoinComponent/>
                <CoinComponent/>
            </div>
            <Footer />
        </div>
        );
  }
