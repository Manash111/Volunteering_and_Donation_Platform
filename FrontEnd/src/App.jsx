import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import PostOpportunity from "./pages/admin/PostOpposturnity.jsx";
import Opportunities from "./Opportunities.jsx";
function App() {
  return (
    <Router>
      <div className="App" id="background">
        <Routes>
          {/* <Route path="/" element={<Campaigns />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/op" element={<PostOpportunity />} />
          <Route path="/opportunities" element={<Opportunities />} />

          {/* <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/post-opportunity"
            element={<PostOpportunityForm />}
          ></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registerUser" element={<RegisterUser />}></Route>
          <Route path="/campaigns" element={<CampaignPage />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
