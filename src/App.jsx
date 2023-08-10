import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [textArea, setTextArea] = useState("");
  const [html,setHtml]=useState(null)

  function parseClipboard(text) {
    const lines = text.split('\n');
    const data = lines.map(line => line.split('\t'));
    const filteredData = data.filter(row => !row.filter(cell => cell == '').length);

    const myList=filteredData.slice(1).map(item=>item[2]+" "+item[3]+"\n")
    setHtml(<ul>{myList.map(item=>
      <li>{item}</li>
      )}</ul>
      
      )
  }

  return (
    <div>
      <textarea name='textArea' value={textArea} cols={60} rows={10} onChange={(e) => setTextArea(e.target.value)} />
      <button onClick={() => parseClipboard(textArea)}>Format Text</button>
      {html}
    </div>
  );
}

export default App
