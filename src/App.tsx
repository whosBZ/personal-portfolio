import "./App.css";
import HeroWrapper from "./components/hero/HeroWrapper";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main-wrapper">
        <NavBar />
        <HeroWrapper />
    </div>
  );
}

export default App;
