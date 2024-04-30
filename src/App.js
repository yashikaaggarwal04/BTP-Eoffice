import './App.css';
import Form from './component/form';
import Home from './component/Home';
import Login from './component/login_2';
import Register from './component/register';
import Profile from './component/Profile';
import About from './component/About';  // Import the About component
import Contact from './component/contact';
import PDF from './component/PDFFile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/home/form" element={<Form />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/home/form/pdf" element={<PDF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
