import { useNavigate } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="main-header">
        <div className="left">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="middle">
          <h1 className="logo" onClick={() => navigate("/")}>
            MGR
          </h1>
        </div>
        <div className="right">
          <svg
            width="40"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="6"
              r="4"
              stroke="black"
              stroke-width="2"
              fill="none"
            />
            <path
              d="M4 20c0-4 4-6 8-6s8 2 8 6"
              stroke="black"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
