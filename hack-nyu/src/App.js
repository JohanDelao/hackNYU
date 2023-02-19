import './App.css';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/GoogleAuth';
import Login from './pages/Login';
import Main from './pages/Main'
import VideoTest from './pages/VideoTest';
import Account from './pages/Account'


function App() {
  return (
    <div>
    <AuthContextProvider>    
      <Routes>
        <Route path='/' element={<Login />} />
        
        <Route
          path='/Main'
          element={
            <Protected>
              <Main />
            </Protected>
          }
        />
        <Route
          path='/VideoTest'
          element={
            <Protected>
              <VideoTest />
            </Protected>
          }
        />
        <Route
          path='/Account'
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  </div>
  );
}

export default App;
