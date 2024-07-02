import { NavBar } from "./components/NavBar";
import "./App.css";
import bgvideo from "./assets/bgvideo.mp4";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative h-screen font-robomono">
      <video
        src={bgvideo}
        className=" inset-0  w-full h-full object-cover  z-0 fixed"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute   inset-0 z-10">
        <NavBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
