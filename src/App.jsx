import { useState } from "react";

import Home from "./pages/Home";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
            <div className="theme-bg min-h-screen transition-all duration-500">
              <ScrollProgress />
              <Background />

              <div className="relative z-10">
                <Home />
              </div>
            </div>
      )}
    </>
  );
}

export default App;