
import { useEffect, useState } from "react";
import { Share2, ArrowUpRight, Play, MapPin, CircleDot } from "lucide-react";
import "./App.css";

const RELEASE_DATE = new Date("2026-11-19T00:00:00+05:30");

function getTimeLeft() {
  const difference = Math.max(0, RELEASE_DATE - new Date());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    const data = {
      title: "GTA VI Countdown | TRIPPYTALES420",
      text: "The wait is almost over!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied!");
      }
    } catch {
      // Sharing cancelled.
    }
  };

  const countdown = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="website">

      <header className="navbar">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-logo">TT420</div>
            <span>TRIPPYTALES420</span>
          </div>

          <div className="nav-right">
            <div className="live-status">
              <span className="live-dot"></span>
              COUNTDOWN LIVE
            </div>

            <button className="share-button" onClick={handleShare}>
              <ArrowUpRight size={13} />
              SHARE
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">

            <div className="presented-badge">
              🎮 PRESENTED BY TRIPPYTALES420
            </div>

            <div className="eyebrow wait-label">
              <span></span>
              THE WAIT IS ALMOST OVER
              <span></span>
            </div>

            <div className="gta-logo">
              <div className="gta-words">
                <span>GRAND</span>
                <span>THEFT</span>
                <span>AUTO</span>
              </div>
              <span className="gta-six">VI</span>
            </div>

            <h2 className="welcome-heading">
              WELCOME BACK TO VICE CITY
            </h2>

            <p className="description">
              Neon nights. Endless possibilities.
              <br />
              One city. One legendary comeback.
            </p>

            <div className="timer-heading">
              <CircleDot size={12} />
              TIME UNTIL GRAND THEFT AUTO VI
            </div>

            <div className="countdown-grid">
              {countdown.map((item) => (
                <div className="countdown-card" key={item.label}>
                  <strong>{String(item.value).padStart(2, "0")}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="release-date">
              <div className="release-label">
                <span></span>
                OFFICIAL RELEASE DATE
                <span></span>
              </div>
              <h3>19 NOVEMBER 2026</h3>
            </div>

            <div className="action-buttons">
               
<a
  href="https://www.instagram.com/trippy_tales420/?hl=en"
  target="_blank"
  rel="noreferrer"
  className="action-button official-button"
>
  <svg
    className="instagram-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>

  <span>VISIT OUR INSTAGRAM</span>
  <span className="instagram-arrow">↗</span>
</a>


              <a
                href="https://www.youtube.com/@trippy_tales420"
                target="_blank"
                rel="noreferrer"
                className="action-button subscribe-button"
              >
                <Play size={12} fill="currentColor" />
                SUBSCRIBE TO OUR CHANNEL
              </a>
            </div>

            <div className="gaming-line">
              ◉ GAMING · COUNTDOWNS · GAMEPLAY · ENTERTAINMENT
            </div>

          </div>
        </section>

        {/* VICE CITY SUNSET AND SKYLINE */}
        <section className="city-scene">
          <div className="city-location">
            <MapPin size={10} fill="currentColor" />
            LEONIDA · USA
          </div>

          <div className="sun"></div>

          <div className="palm palm-left">
            <div className="palm-trunk"></div>
            <div className="palm-leaves">✳</div>
          </div>

          <div className="palm palm-right">
            <div className="palm-trunk"></div>
            <div className="palm-leaves">✳</div>
          </div>

          <div className="skyline">
            {[85, 105, 75, 125, 90, 135, 85, 115, 78, 100].map(
              (height, index) => (
                <div
                  className="building"
                  key={index}
                  style={{ height: `${height}px` }}
                >
                  <div className="windows"></div>
                </div>
              )
            )}
          </div>

          <div className="city-road"></div>
        </section>

        <div className="marquee">
          <span>
            <CircleDot size={12} />
            GAMING · COUNTDOWNS · GAMEPLAY · ENTERTAINMENT
          </span>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div>
              <h3>TRIPPYTALES420</h3>
              <p>YOUR GAMING DESTINATION.</p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@trippy_tales420"
            target="_blank"
            rel="noreferrer"
            className="youtube-link"
          >
            <Play size={13} fill="currentColor" />
            VISIT OUR YOUTUBE CHANNEL
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="disclaimer">
         · TRIPPYTALES420 · SUBSCRIBE FOR MORE GAMING CONTENT · THIS IS A FAN-MADE COUNTDOWN AND NOT AFFILIATED WITH ROCKSTAR GAMES ·
        </p>
      </footer>

    </div>
  );
}

export default App;
