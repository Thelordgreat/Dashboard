import './App.css';
import SignIn from './Components/LoginPage/SignIn';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Signup from './Components/SignUp/Signup.js';
import Nav from './Components/Nav/Nav';



function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
