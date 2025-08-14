import type { FC } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";

const navStyles: React.CSSProperties = {
  backgroundColor: "#2d3748",
  padding: "8px",
  marginTop: "0",
  width: "100%",
};

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const linkStyles: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none",
  marginRight: "1.5rem",
};

const Navbar: FC = (): JSX.Element => {
  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <Link to="/" style={{ ...linkStyles, marginRight: 0 }}>
          Jonathan Sena
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/about" style={linkStyles}>
            About
          </Link>
          <Link to="/projects" style={linkStyles}>
            Projects
          </Link>
          <Link to="/contact" style={{ ...linkStyles, marginRight: 0 }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
