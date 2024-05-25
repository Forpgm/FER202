import "./App.css";
// import Content from "./components/Content/Content";
//import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import MainComponent from "./components/shared/MainComponent";
// import CountDemoClass from "./components/CountDemoClass";
// import CountDemoFunc from "./components/CountDemoFunc";
// import PlayersWithMap from "./components/PlayersWithMap";
import { useState, useContext, createContext } from "react";
const moneyFromGrand = createContext();
function App() {
  const [money, setMoney] = useState("2 toi");
  return (
    <>
      <moneyFromGrand.Provider value={money}>
        <Children />
      </moneyFromGrand.Provider>
    </>
  );
}

function Grand(money) {
  return (
    <>
      <Parent />
    </>
  );
}

function Parent() {
  return (
    <>
      <Children />
    </>
  );
}

function Children() {
  const value = useContext(moneyFromGrand);
  return <>{value}</>;
}
export default App;
