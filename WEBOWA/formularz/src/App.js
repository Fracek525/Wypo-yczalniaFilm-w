import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <forms>
        <div class="form-group">
          <label for="tytul-filmu">Tytuł filmu</label>

          <input type="text" 
          class="form-control" 
          id="tytul" 
          placeholder="Tytuł"></input>

          <label for="rodzja">Rodzaj</label>

          <select class="form-control">
            <option name="blank" value="0" select="True"></option>
            <option name="komedia" value="1">Komedia</option>
            <option name="obyczajowy" value="2">Obyczajowy</option>
            <option name="sensacyjny" value="3">Sensacyjny</option>
            <option name="horror" value="4">Horror</option>
          </select>
        </div>
      </forms>

      <button id="przycisk" type="button" class="btn btn-primary">Dodaj</button>
    </>
  );
}

export default App;
