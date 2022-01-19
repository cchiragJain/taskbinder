import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* PAGES */
import DashBoard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Singup from "./pages/signup/Signup";

/* STYLES AND COMPONENTS */
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/login" element={<Login />} />
            <Route path="singup" element={<Singup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
