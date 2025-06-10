import "./App.css";
import { Routes, Route } from "react-router";

// pages
import HomePage from "./pages/HomePage"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import PrivatePageExample from "./pages/PrivatePageExample";

// components
import Navbar from "./components/Navbar"
import OnlyPrivate from "./components/OnlyPrivate";
import AdminPageExample from "./pages/AdminPageExample";
import OnlyAdmin from "./components/OnlyAdmin";

function App() {

  return (
    <div>
      <Navbar />

      <br />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private-page-example" element={ <OnlyPrivate> <PrivatePageExample /> </OnlyPrivate> } />
        <Route path="/ejemplo-admin-dashboard" element={ <OnlyAdmin> <AdminPageExample /> </OnlyAdmin> } />


        {/* error FE routes here... */}

      </Routes>
    </div>
  )
}

export default App
