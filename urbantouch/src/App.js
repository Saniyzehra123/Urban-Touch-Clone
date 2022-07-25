 
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Homepage from './Components/Homepage';
// import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Addcartpopup from './Components/ProductPage/Addcartpopup';
import Yourcart from './Components/ProductPage/Yourcart';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
    <AllRoutes/>
    {/* <Addcartpopup/> */}
    
    {/* <Yourcart/> */}
    </div>
  );
}

export default App;
