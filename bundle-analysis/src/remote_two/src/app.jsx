import { Hub } from "hub";

function App() {
  return (
    <div className="App">
      <h1>Remote 2</h1>
      <button onClick={() => Hub.runCommand('showToast', 'this is a message')}>show toast</button>
    </div>
  );
}
export default App;
