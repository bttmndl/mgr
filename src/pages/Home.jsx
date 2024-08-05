import { useNavigate } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="all_layout" onClick={() => navigate("/page3")}>
        <div className="card_header">
          <h3>Sales</h3>
        </div>
      </div>
      <div className="all_layout" onClick={() => navigate("/page2")}>
        <div className="card_header">
          <h3>Dore</h3>
        </div>
      </div>
      <div className="all_layout" onClick={() => navigate("/page3")}>
        <div className="card_header">
          <h3>Employee</h3>
        </div>
      </div>
      <div className="all_layout" onClick={() => navigate("/page4")}>
        <div className="card_header">
          <h3>Accounts</h3>
        </div>
      </div>
    </div>
  );
}