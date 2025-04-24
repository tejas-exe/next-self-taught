import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h6 style={styles.title}>Welcome to My Page!!</h6>
      <p style={styles.subtitle}>Your happy place on the internet ✨</p>
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(135deg, #ffd6ec, #d0e8ff)",
    padding: "2rem",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    color: "#333",
    margin: "2rem",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#5d5d81",
  },
  subtitle: {
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    color: "#7d7d9e",
  },
};

export default Header;
