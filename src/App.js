import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientList from './Components/PatientList';
import AddPatient from './Components/AddPatient';
import UpdatePatient from './Components/UpdatePatient';


function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar />
      <Container>
          <Routes>
            <Route path="addpatient" element={<AddPatient />} />
            <Route
              path="editpatient/:patientId"
              element={<UpdatePatient  />}
            />
            <Route
              path="listpatient"
              element={<PatientList />}
            />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
