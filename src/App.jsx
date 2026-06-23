import { Routes, Route } from "react-router-dom";
import backgroundVideo from "./assets/background.mp4";
import Navbar from "./composants/navbar";
import Footer from "./composants/Footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";
import { useEffect, useRef } from "react";
import TrustedClients from "./pages/trustedClients";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // 1.0 is normal speed, 0.5 is half speed, 0.75 is 74% speed, etc.
      videoRef.current.playbackRate = 0.1;
    }
  }, []);
  return (
    <div className="page-container" style={styles.pageContainer}>
      <div style={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
          ref={videoRef}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div style={styles.videoOverlay}></div>
      </div>

      <div style={styles.layoutWrapper}>
        <Navbar />

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trusted-Clients" element={<TrustedClients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    position: "relative",
    minHeight: "100vh",
  },
  videoContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(2,6,23,0.7)",
  },
  layoutWrapper: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
  },
};

export default App;
