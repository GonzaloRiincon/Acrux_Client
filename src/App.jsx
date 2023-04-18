import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
