import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



function App() {

  const [tytul, setTytul] = useState('');
  const [rodzaj, setRodzaj] = useState('');

  const rodzajMap = {
    0: "Nie wybrano",
    1: "Komedia",
    2: "Obyczajowy",
    3: "Sensacyjny",
    4: "Horror",
  }


  const Add = (e) => {
    e.preventDefault();
    console.log(`Tytuł: ${tytul}; Rodzaj: ${rodzajMap[rodzaj]}`)
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="tytul filmu">Tytuł filmu</label>

          <input type="text" 
          className="form-control" 
          value={tytul}
          placeholder="Tytuł"
          onChange={(e) => setTytul(e.target.value)}></input>

          <label htmlFor="rodzaj">Rodzaj</label>

          <select className="form-control"
          value={rodzaj}
          onChange={(e) => setRodzaj(parseInt(e.target.value))}>
            <option value="0" selected="True"></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>
      </form>

      <button id="przycisk" type="submit" className="btn btn-primary" onClick={Add}>Dodaj</button>
    </>
  );
}

export default App;
