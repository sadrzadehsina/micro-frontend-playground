import { Hub  } from "hub";

function App() {

  return (
    <div className="App">
      <h1>Remote 1</h1>
      <button onClick={() => Hub.runCommand('setTheme', 'dark')}>set theme</button>
    </div>
  );
}
export default App;
