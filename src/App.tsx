import { createSignal } from 'solid-js';
import { convert_to_manchu } from '../rust-lib/pkg';
import './App.css';

function App() {
  const [count, setCount] = createSignal(0);
  const text = "manju gisun";
  const manchu_text = convert_to_manchu(text);


  return (
    <>
      <h1>Manchu Converter</h1>
      <p>{manchu_text}</p>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
