import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import PriceSection from "./components/PriceSection";
import InstaFeeds from "./components/InstagramFeed";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
      <AboutSection/>
      <PriceSection/>
      <InstaFeeds/>
      <Footer/>
      <div className="copyright" style={{backgroundColor: "#1b202a", textAlign:"center", color:"#ffffff"}}>Copyright © 2023 Beauty Nails</div>
    </div>
  );
}

export default App;
