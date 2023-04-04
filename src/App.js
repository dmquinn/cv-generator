import Builder from "./components/builder/Builder";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App" style={{}}>
      <Navbar />
      <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
        <Preview />
        <Builder />
      </div>
    </div>
  );
}

export default App;
