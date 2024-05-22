import "./App.css";
// import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import MainComponent from "./components/shared/MainComponent";
import CountDemoClass from "./components/CountDemoClass";
function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Content /> */}
      {/* <MainComponent />
      <Footer /> */}
      <CountDemoClass />
    </div>
  );
}

export default App;
