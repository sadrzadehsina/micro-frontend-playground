import { useHubActions } from "hub";

function App() {
  const { showToast } = useHubActions();

  return (
    <div className="App">
      <h1>Remote 2</h1>
      <button onClick={() => showToast("toast")}>show toast</button>
    </div>
  );
}
export default App;
