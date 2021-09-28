import './App.css';
import { Route } from 'react-router-dom'
import  Home  from './pages/Home';
import  SellPage  from './pages/SellPage';

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/sell/' component={SellPage} />
    </div>
  );
}

export default App;
