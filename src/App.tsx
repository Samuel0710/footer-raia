import "./App.css";
import Anvisa from "./components/anvisa-text/Anvisa";
import FooterList from "./components/footer-list/FooterList";
import PaymentList from "./components/payment-list/PaymentList";
import RaiaData from "./components/raia-data/RaiaData";

function App() {
  return (
    <>
      <FooterList />
      <Anvisa />
      <PaymentList />
      <RaiaData/>
    </>
  );
}

export default App;
