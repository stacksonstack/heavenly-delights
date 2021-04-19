import './App.css';
import Navbar from "./Components/Navbar"
import BeverageContainer from "./Containers/BeverageContainer"
import EdibleContainer from "./Containers/EdibleContainer"
import Home from "./Components/Home"
import AboutContainer from "./Containers/AboutContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <AboutContainer />
      <BeverageContainer />
      <EdibleContainer />
    </div>
  );
}

export default App;
