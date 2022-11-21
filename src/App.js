import { Routes, Route } from 'react-router-dom';
import './index.scss';
import './categories.styles.scss';
import Home from './Routes/Home/Home';
import Navigation from './Routes/Navigation/Navigation';
import Signin from './Routes/SignIn/Signin';

function App() {

  function Shop() {
    return (
      <h1>Shop</h1>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Home />}/>
        <Route path ="shop" element={<Shop />}/>
        <Route path ="signin" element={<Signin />}/>
      </Route>
    </Routes>
  )
}

export default App;
