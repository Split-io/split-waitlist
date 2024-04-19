import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ManageAssetsSection from "./components/ManageAssetsSection";
import FeaturesSection from "./components/FeaturesSection";
import EarlyAccessCTASection from "./components/EarlyAccessCTASection";
import QuickAnalysis from "./components/QuickAnalysis";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="font-Gentium">
          <NavBar />
          <HeroSection />
          <ManageAssetsSection />
          <FeaturesSection />
          <EarlyAccessCTASection />
          <QuickAnalysis />
        </main>
      )}
    </>
  );
}

export default App;
