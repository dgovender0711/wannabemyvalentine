import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  // PERSONALIZE 👇
  const name = "Kerisa";
  const from = "Me";

  const yesTexts = ["Yes", "YAY! 💘"];
  const [yesClicked, setYesClicked] = useState(false);

  const noTexts = [
    "No",
    "How dare you?",
    "Kerisa Govender, I warn you!",
    "After all we went through?",
    "There is no way back",
    "How can you do it?",
    "Bye",
  ];

  const [noIndex, setNoIndex] = useState(0);
  const [noScale, setNoScale] = useState(1);
  const [noHidden, setNoHidden] = useState(false);
  const [noFading, setNoFading] = useState(false);

  const handleYesClick = () => {
    if (yesClicked) return;

    setYesClicked(true);

    // Navigate after tiny celebration delay
    window.setTimeout(() => {
      navigate("/yes");
    }, 900);
  };

  const handleNoClick = () => {
    setNoScale((s) => Math.max(0.85, Math.round((s - 0.04) * 100) / 100));

    setNoIndex((i) => {
      const next = Math.min(i + 1, noTexts.length - 1);

      if (next === noTexts.length - 1) {
        setNoFading(true);
        window.setTimeout(() => setNoHidden(true), 650);
      }

      return next;
    });
  };

  return (
    <div className="home-page min-h-screen w-screen flex items-center justify-center px-4 py-10">
      <div className="home-card w-full max-w-5xl rounded-3xl px-6 md:px-12 py-10 md:py-14 shadow-2xl">
        <div className="text-center">
          <img src='/cow.png' alt="Valentine Cow" className="cow-image" />
          <p className="home-kicker">One tiny question, {name}…</p>

          <h1 className="home-title mt-2 text-3xl md:text-6xl">
            Will you be my Valentine?
          </h1>

          <p className="home-subtitle mt-5 text-base md:text-lg">
            From <span className="home-from">{from}</span> 💗
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <button
            onClick={handleYesClick}
            className={`val-btn val-btn--soft val-btn--yes ${
              yesClicked ? "yay" : ""
            }`}
            type="button"
          >
            {yesClicked ? yesTexts[1] : yesTexts[0]}
          </button>

          {!noHidden && (
            <button
              onClick={handleNoClick}
              className={`val-btn val-btn--soft val-btn--no ${
                noFading ? "fade-out" : ""
              }`}
              style={{ transform: `scale(${noScale})` }}
              type="button"
            >
              {noTexts[noIndex]}
            </button>
          )}
        </div>

        <div className="home-footer mt-10 text-center">
          <span className="home-hint">(Choose wisely 😌)</span>
        </div>
      </div>

      <div className="hearts" aria-hidden="true">
        <span className="heart h1" />
        <span className="heart h2" />
        <span className="heart h3" />
        <span className="heart h4" />
        <span className="heart h5" />
      </div>
    </div>
  );
}

export default App;
