// src/App.jsx
import Nav from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <Nav />
        <AppRoutes />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
