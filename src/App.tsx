import { PatientProvider } from "./context/patientProvider";
import { Home } from "./pages/Home";

function App() {
  return (
    <PatientProvider>
      <Home/>
    </PatientProvider>
  )
}

export default App
