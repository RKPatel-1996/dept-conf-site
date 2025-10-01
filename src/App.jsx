import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Themes from "./components/Themes";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Abstracts from "./components/Abstracts";
import Registration from "./components/Registration";
// Import the Contact component
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Themes />
        <Schedule />
        <Speakers />
        <Abstracts />
        <Registration />
        <Contact /> {/* Render the Contact component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
