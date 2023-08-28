import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <Counter />
        </header>
        <Todo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
