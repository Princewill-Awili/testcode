
import './App.css';
import {  StateContextProvider } from './context';
import Container from './Container';


function App() {

  return (
    <StateContextProvider>
      <div className="App">
        <Container/>
      </div>
    </StateContextProvider>
  );
}

export default App;
