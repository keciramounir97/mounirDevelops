import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { Phone, InstagramFill, Envelope } from "akar-icons";
import Logo from "../assets/whitemode.png";
export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">Mounir Develops 🖥️</div>
        <div className="links">
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/services">Services</Link>
          </div>
          <div className="nav-links">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav-links">
            <Link to="/trusted-Clients">Trusted Clients</Link>
          </div>
          <div className="nav-links">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="contact">
          <button type="button" title="Call_btn" className="icon-btn">
            <Phone strokeWidth={2} size={24} />
          </button>
          <button type="button" title="ig_btn" className="icon-btn">
            <InstagramFill strokeWidth={2} size={24} />
          </button>
          <button type="button" title="email_btn" className="icon-btn">
            <Envelope strokeWidth={2} size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
