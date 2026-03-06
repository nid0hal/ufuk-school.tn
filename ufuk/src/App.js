import "./App.css";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 UFUK</h1>
        <h2 style={styles.subtitle}>Coming Soon</h2>
        <p style={styles.text}>
          Notre nouvelle plateforme de soutien scolaire arrive bientôt.
        </p>
        <div style={styles.loader}></div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    color: "white",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "500px",
  },
  title: {
    fontSize: "48px",
    margin: "0",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "28px",
    margin: "10px 0 20px",
    color: "#00e6ff",
  },
  text: {
    fontSize: "16px",
    opacity: "0.9",
  },
  loader: {
    margin: "30px auto 0",
    width: "50px",
    height: "50px",
    border: "5px solid rgba(255,255,255,0.2)",
    borderTop: "5px solid #00e6ff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default App;