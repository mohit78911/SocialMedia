import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const getDataHandler = ()=>{
    axios.get('http://localhost:3800/userdata').then((result)=)
  }
  return (
    <div className="App">
       hello
    </div>
  );
}

export default App;
