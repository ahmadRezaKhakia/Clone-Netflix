/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {Route,Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './components/Landing';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
        
      
    </div>
  );
}

export default App;
