// import './index.css'

import About from "./Components/About";
import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Prices from "./Components/Prices";

function App() {
  return (
      <div className="main">
      <Header />
      <main>
      <Banner />
      <About />
      <Prices />
      <Faq />
      </main>
      <Footer />
      </div>

  );
}

export default App;
