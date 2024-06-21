import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Subscription from "./Components/Subscription";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section/>
      <Subscription/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
