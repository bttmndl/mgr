import "../style/MainWrapper.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sales from "./Sales";
import Dore from "./Dore";
import Account from "./Account";
import Employee from "./Employee";
import Home from "./Home";
import Header from "../component/Header";

export default function MainWrapper() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/dore" element={<Dore />} />
          <Route path="/account" element={<Account />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}
