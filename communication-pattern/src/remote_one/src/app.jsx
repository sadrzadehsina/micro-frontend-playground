import { useHubActions } from "hub";

function App() {
  const { setTheme } = useHubActions();

  return (
    <div className="App">
      <h1>Remote 1</h1>
      <button onClick={() => setTheme("light")}>set theme</button>
    </div>
  );
}
export default App;
