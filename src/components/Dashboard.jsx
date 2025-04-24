import React, { useState } from "react";

function DashBoard() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarStyle = {
    width: isOpen ? "250px" : "50px",
    height: "1000px",
    backgroundColor: "gray",
    color: "white",
    padding: isOpen ? "22px" : "0",
    overflowX: "hidden",
    position: "fixed",
    transition: "0.3s",
    whiteSpace: "nowrap",
  };

  const linkStyle = {
    color: "white",
    fontSize:"26px",
    textDecoration: "none",
    alignItems: "center",
    display: "block",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
    border:("1px solid")
  };

  const toggleButtonStyle = {
    position: "absolute",
    fontSize: "30px",
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "white",
    marginLeft:"10px",
    marginTop:isOpen?"495px":"840px",
    
  };
  const companyLogo={
    borderRadius: "50%",   
  width: isOpen? "120px":"40px",              
  height:isOpen? "120px":"40px",             
  display: "block",            
  margin: "20px auto",         
  border: "3px solid #fff",    
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"

  }

  return (
      <div style={sidebarStyle}>
        <div>
      <img src="src/components/assets/logo.jpg" alt="company logo" style={companyLogo}/>
        {isOpen && (
          <>
            {isOpen && <h2 style={{ textAlign: "center", width: "100%" }}>Intern Dashboard</h2>}
            <a href="#" style={linkStyle}>📋 {isOpen && "Applications"}</a>
            <a href="#" style={linkStyle}>✅ {isOpen && "Status"}</a>
            <a href="#" style={linkStyle}> 📝 {isOpen && "Interviews"}</a>
            
          </>
        )}
        </div>
        <button style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      </div>
  );
}

export default DashBoard;