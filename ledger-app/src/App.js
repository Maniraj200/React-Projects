
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Login from './components/users/Login';
import Register from './components/users/Register';
import Navbar from './components/home/Navbar';
import Home from './components/home/Home';
import Transcation from './components/transaction/Transaction';
import NotFound from './components/NotFound';
import { AuthProvider } from './components/context/AuthContext';
import CreateTransaction from './components/transaction/CreateTransaction';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
    <ToastContainer className={App}/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/transaction' element={<Transcation/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/create' element={<CreateTransaction/>}></Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
