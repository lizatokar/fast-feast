import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Contacts from "./Components/Contacts/Contacts";
import Burgers from "./Components/Burgers/Burgers";
import CertainBurger from "./Components/CertainBurger/CertainBurger";
import MyCart from "./Components/MyCart/MyCart";
import Footer from "./Components/Footer/Footer";


function App(props) {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/my-cart' element={<MyCart/>}/>
          <Route path='/burgers' element={<Burgers/>}/>
          <Route path='/burger/:certainBurgerId' element={<CertainBurger comments={props.data.comments}/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;