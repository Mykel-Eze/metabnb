import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import "./css/fonts.css"
import "./css/style.css"
import "./css/navbar.css"
import "./css/footer.css"
import "./css/modal.css"
import "./css/home.css"

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages";
import PlaceToStay from "./pages/place-to-stay";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes >
          {/*---==== Contents Sections  ====---*/}
          <Route path="/" element={<Home/>} />
          <Route path="/place-to-stay" element={<PlaceToStay/>} />
          {/*---==== end of Contents Sections  ====---*/}
        </Routes >

        <Footer />
      </div>
    </Router>
  );
}

export default App;
