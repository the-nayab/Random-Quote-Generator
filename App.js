import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [qoute, setQoute] = useState("");
  const [background, setBackground] = useState("blue");
  const colors = ["grey", "pink", "green", "yellow", "coral", "lightgreen"];

  const changeBackground = () => {
    const col = Math.floor(Math.random() * 999 % 6);
    console.log(col);

    setTimeout(() => {
      setBackground(colors[col]);
    }, 300);
  }

  const func = () => {
    getQoute();
    changeBackground();

  }
  const getQoute = () => {
    fetch("https://api.quotable.io/random")
    .then((response) => {return response.json()})
    .then((data) => setQoute(data));
  }

  useEffect(() => getQoute(), []);

  return (
    <div className={background}>
      <div className='App'>
        <div className="card text-center mb-3">
          <div className="card-body">
            <div className="row" style={{ width: "flex" }} >
              <p class="card-text">{qoute.content}</p>
              </div>
            <h6>- {qoute.author}</h6>
          </div>
          <div className='btn'>
            <button type="button" onClick={() => { func() }} className={background} >New Quote</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
