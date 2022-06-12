
import './App.css';
import { AuthProvider } from './components/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Book from './components/Book';

function App() {
  
  return (
    <div className="App">
        <AuthProvider>
      <Navbar/>
      <Routes>

    <Route path="/" element={ <Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path ="book" element={<Book/>}/>
  </Routes>
      
    
  
     </AuthProvider>
    </div>
  );
}

export default App;
