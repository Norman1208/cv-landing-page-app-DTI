import {
  Route,
  Routes
} from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import LandingPage from './Pages/LandingPage';
import Demo from './Pages/Demo';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Demo />} />
      <Route path="/" element={<ContactUs />}/>
    </Routes>
  );
}

export default App;
