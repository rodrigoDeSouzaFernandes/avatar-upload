import Provider from "./Context/Provider";
import Home from "./Pages/Home";

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
