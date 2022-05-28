import "./App.css";
import AllBalloon from "./components/AllBalloon";
import Rectangle from "./components/Rectangle";
import UserHandle from "./components/UserHandle";

function App() {
  return (
    <div className="App">
      <Rectangle />
      <AllBalloon />
      <UserHandle />
    </div>
  );
}

export default App;
