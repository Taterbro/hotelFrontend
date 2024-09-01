import Bar from "./Bar";

import Homepage from "./Homepage";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
