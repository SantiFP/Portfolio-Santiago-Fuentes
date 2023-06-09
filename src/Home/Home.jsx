import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LifeCounterCtx } from "../Store/LifeStore";

const Home = () => {

  let selectedLanguage = localStorage.getItem("lan");

  const navigate = useNavigate();
  const { dispatch } = useContext(LifeCounterCtx);
  const [selectedPlayers, setSelectedPlayers] = useState(2);
  const [language, setLanguage] = useState(selectedLanguage ? selectedLanguage : 'es');

  const startPlaying = () => {
    selectedPlayers === 2 && navigate("twoplayers");
    selectedPlayers === 3 && navigate("threeplayers");
    selectedPlayers === 4 && navigate("fourplayers");
  };

  const playersSelectionHandler = (e) => {
    setSelectedPlayers(Number(e.target.value));
  };

  const lifesSelectionHandler = (e) => {
    dispatch({ type: e.target.value, starting: "start" });
  };

  const languageHandler = (language) => {
    setLanguage(language);
    localStorage.setItem('lan',language)
  };

  return (
    <>
      <section className={`h-screen ${classes.background}`}>
        <header className="h-1/3">
          <div className="flex justify-center items-center  h-full">
            <div className="h-full  w-full flex items-center">
              <img
                className={`${classes.magicLogo} mx-auto pt-12`}
                src="/magic-logo.png"
                alt="magicLogo"
              />
            </div>
          </div>
        </header>

        <div className={`languages ${classes.languages}`}>
          <p
            onClick={languageHandler.bind(null, "es")}
            className={language === "es" ? "underline" : ""}
          >
            Español
          </p>
          <p
            onClick={languageHandler.bind(null, "en")}
            className={language === "en" ? "underline" : ""}
          >
            English
          </p>
          <p
            onClick={languageHandler.bind(null, "po")}
            className={language === "po" ? "underline" : ""}
          >
            Português
          </p>
          <p
            onClick={languageHandler.bind(null, "ch")}
            className={language === "ch" ? "underline" : ""}
          >
            中國人
          </p>
          <p
            onClick={languageHandler.bind(null, "ja")}
            className={language === "ja" ? "underline" : ""}
          >
            日本
          </p>
        </div>

        <div
          className={`${classes.select} h-1/3 flex flex-col justify-center items-center space-y-2 pb-6`}
        >
          <p className="text-lg text-white">
            {language === "es"
              ? "Total de jugadores"
              : language === "en"
              ? "Total Players"
              : language === "po"
              ? "Jogadores totais"
              : language === "ch"
              ? "玩家總數"
              : "総プレイヤー数"}
          </p>
          <select
            onChange={playersSelectionHandler}
            className={`${classes.arrow} py-1 text-2xl`}
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <p className="text-lg text-white">
            {language === "es"
              ? "Total de vidas inicial"
              : language === "en"
              ? "Starting lives total"
              : language === "po"
              ? "Total de vidas iniciais"
              : language === "ch"
              ? "起始生命總計"
              : "開始時の合計寿命"}
          </p>
          <select
            onChange={lifesSelectionHandler}
            className={`${classes.arrow} py-1 text-2xl`}
          >
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
          <div className="pt-2">
            <button
              onClick={startPlaying}
              className=" border-2 cursor-default bg-white border-solid px-4 py-2 rounded-2xl text-xl "
            >
              {language === "es"
                ? "Comenzar"
                : language === "en"
                ? "Start"
                : language === "po"
                ? "Começar"
                : language === "ch"
                ? "開始"
                : "始める"}
            </button>
          </div>
        </div>

        <footer className="h-1/3 relative overflow-hidden">
          <img
            className={`${classes.magicElements} h-full mx-auto`}
            src="/magic-elements.png"
            alt="elements"
          />
          <div className={classes.white}></div>
        </footer>
      </section>
    </>
  );
};

export default Home;
