import './App.css';
import Ex1 from './components/Ex1';
import Ex10 from './components/Ex10';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import UnaHeader from './components/UnaHeader';

function App() {
  return (
    <div className="App">
      <UnaHeader/>
      <span>-------------------------------------------------------</span>
      <Ex1 />
      <span>-------------------------------------------------------</span>
      <Ex2 />
      <span>-------------------------------------------------------</span>
      <Ex3 />
      <span>-------------------------------------------------------</span>
      <Ex4 />
      <span>-------------------------------------------------------</span>
      <Ex5 />
      <span>-------------------------------------------------------</span>
      <Ex6 />
      <span>-------------------------------------------------------</span>
      <Ex7 />
      <span>-------------------------------------------------------</span>
      <Ex10 />
      <span>-------------------------------------------------------</span>
    </div>
  );
}

export default App;
