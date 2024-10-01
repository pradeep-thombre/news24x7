import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import {HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ToastItem from './components/Toast';
import Emplyees from './components/Emplyees';
import Login from './components/Login';
import Grivance from './components/Grivance';
import Signup from './components/Signup';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <ToastItem title="Welcome!!!" description="Thanks for viswiting News 24x7" />
      <BrowserRouter>
        <Navbar />
        <div className="layout">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/employees" element={<Emplyees />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/grivance" element={<Grivance/>}/>
            <Route path="/score" element={<Score/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
