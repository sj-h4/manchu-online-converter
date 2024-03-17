import { createSignal } from 'solid-js';
import { convert_to_manchu } from '../wasm/pkg';
import './App.css';

function App() {
  const [inputText, setInputText] = createSignal("");
  const [manchuText, setManchuText] = createSignal("");

  const handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    if (!target) return;
    setInputText(target.value);
    const newManchuText = convert_to_manchu(inputText());
    setManchuText(newManchuText);
  };


  return (
    <>
      <h1>Manchu Converter</h1>
      <p>NOTE: This application is a work in progress.</p>
      <p>input transliteration below:</p>
      <textarea class="input-transliteration" onInput={handleInput} value={inputText()} />
      <div>output Manchu Text:</div>
      <div class="manchu-text-container">
        <p class="manchu-text">{manchuText()}</p>
      </div>
    </>
  );
}

export default App;
