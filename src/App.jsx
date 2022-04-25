import "./App.css";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <h1>원티드 프리온보딩 프론트엔드 선발 과제</h1>
      <br />
      <Toggle />
      <br />
      <Tab />
      <br />
      <Slider />
      <br />
      <Input />
    </div>
  );
}

export default App;
