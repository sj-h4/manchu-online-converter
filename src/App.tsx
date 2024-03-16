import { createSignal } from 'solid-js';
import { convert_to_manchu } from '../wasm/pkg';
import './App.css';

function App() {
  const [inputText, setInputText] = createSignal("");
  const [manchuText, setManchuText] = createSignal("");


  const handleInput = (e: any) => {
    setInputText(e.currentTarget.value);
    const newManchuText = convert_to_manchu(inputText());
    setManchuText(newManchuText);
  };


  return (
    <>
      <h1>Manchu Converter</h1>
      <p>input transliteration below:</p>
      <input class="input-transliteration" type="text" value={inputText()} onChange={handleInput} />
      <div>output Manchu Text:</div>
      <div class="manchu-text-container">
        <p class="manchu-text">{manchuText()}</p>
      </div>
    </>
  );
}

export default App;
