import { useState } from "react";

import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import AboutModal from "./components/AboutModal";
import TarotModal from "./components/TarotModal";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [tarotOpen, setTarotOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleBookingSuccess = () => {
    setTarotOpen(false);

    //small delay so the transition feels smoother
    setTimeout(() => {
      setSuccessOpen(true);
    }, 250);
  };

  return (
    <>
      <AboutModal
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      <TarotModal
        open={tarotOpen}
        onClose={() => setTarotOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />

      <div className="app">

        <TopBar />

        <div className="content">

          <Sidebar
            openAbout={() => setAboutOpen(true)}
          />

          <main className="main-content">

            {/*home*/}

            <section
              id="home"
              className="hero-section"
            >
              <img
                src="/horizontal.png"
                alt="Lover Of The Moon"
                className="hero-image"
              />
            </section>

            {/*tarot*/}

            <section
              id="tarot"
              className="tarot-section"
            >

              <h1>
                Book a Personalized Tarot Reading
              </h1>

              <button
                className="tarot-button"
                onClick={() => setTarotOpen(true)}
              >
                ✦ Right Here ✦
              </button>

            </section>

          </main>

        </div>

      </div>
    </>
  );
}

export default App;