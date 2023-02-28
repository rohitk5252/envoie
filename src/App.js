// import './index.css'

import About from "./Components/About";
import Banner from "./Components/Banner";
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
      </main>
      </div>

  );
}

export default App;
