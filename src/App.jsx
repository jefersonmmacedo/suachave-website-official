import { Router } from './routes/Router';
import {AuthContext, AuthProvider} from './contexts/Auth'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Global.css';
import { useContext } from 'react';
import { useEffect } from 'react';


function App() {
  const suachave = {
    type: "company"
  };

  // const suachave = ""
  const {logout} = useContext(AuthContext);

  useEffect(() => {
    function newSetData() {
      localStorage.setItem("suachave", JSON.stringify(suachave));
    }
    newSetData()
  }, [])
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className='container'> 
    <ToastContainer autoClose={5000} theme="colored" /> 
    <Router />

    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
