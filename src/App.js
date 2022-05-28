import "./App.css";
import AllBalloon from "./components/AllBalloon";
import Gif from "./components/Gif";
import Rectangle from "./components/Rectangle";
import UserHandle from "./components/UserHandle";

function App() {
  return (
    <div className="App">
      <Rectangle />
      <AllBalloon />
      <UserHandle />
      <Gif />
    </div>
  );
}

export default App;
