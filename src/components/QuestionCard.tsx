import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import "./QuestionCard.css";
import { getSingleAnimal } from "../services/AnimalServices";
import { updateUserData } from "../services/UserServices";
import Animal from "../models/Animal";
import AuthContext from "../context/AuthContext";
import { sendNewSessionData } from "../services/SessionServices";
import { useNavigate } from "react-router-dom";

// value of props come from NewGameRoute
// difficulty sets fields to fill in
// speed sets time limit
// both are displayed in the setting bar

interface Props {
  difficulty: string;
  speed: string;
}

const QuestionCard = ({ difficulty, speed }: Props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal>();
  // const [timer, setTimer] = useState<number>();
  const [timerRemaining, setTimerRemaining] = useState<number>();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [active, setActive] = useState<string>("");
  const [latinName, setLatinName] = useState<string>("");
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getAndSetAnimal();
  }, [total]);

  useEffect(() => {
    if (speed === "Tortoise") {
      // setTimer(45);
      setTimerRemaining(45);
    } else if (speed === "Cheetah") {
      // setTimer(30);
      setTimerRemaining(30);
    } else if (speed === "Peregrine Falcon") {
      // setTimer(15);
      setTimerRemaining(15);
    } else {
      // setTimer(Infinity);
      setTimerRemaining(Infinity);
    }
  }, [total]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timerRemaining! > 0) {
        setTimerRemaining((prev) => {
          return prev! - 1;
        });
      }
      if (timerRemaining === 0) {
        clearInterval(myInterval);
        sendUpdatedUserData();
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  const checkAnswers = (difficulty: string): boolean => {
    const easy: boolean = type === animal?.animal_type ? true : false;
    const medium: boolean =
      easy && active === animal?.active_time ? true : false;
    const hard: boolean =
      easy && medium && name === animal?.name ? true : false;
    const insanus: boolean =
      easy && medium && hard && latinName === animal?.latin_name ? true : false;

    if (difficulty === "Easy") {
      return easy;
    } else if (difficulty === "Medium") {
      return medium;
    } else if (difficulty === "Hard") {
      return hard;
    } else {
      return insanus;
    }
  };

  const endSession = () => {
    sendNewSessionData({
      uid: user?.uid!,
      displayName: user?.displayName!,
      difficulty,
      speed,
      correct,
      incorrect,
      total,
    });
    navigate("/");
  };

  const sendUpdatedUserData = () => {
    if (checkAnswers(difficulty)) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    updateUserData(user?.uid!, {
      difficulty,
      correct: checkAnswers(difficulty),
    });
    setTotal(total + 1);

    setActive("");
    setType("");
    setLatinName("");
    setName("");
  };

  // submit handler attached to form

  // on submit (or end of interval) sendUpdatedUserData is fired

  // sendUserData increments correct, incorrect (depending on the boolean received from checkAnswers), and total
  // to store in state for session submission at the end of the session

  // updateUserData is fired using the logged in user's uid and a new UserUpdate (see model) are sent to the body
  // depending on the answer either a correct or incorrect is added to the user's life time total

  // resets state for active, type, latin_name, and name

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    sendUpdatedUserData();
  };

  return (
    <div className="QuestionCard">
      <div className="flex-div">
        <div className="game-settings-img-container">
          <p className="gameSettingsBar">
            {difficulty} - {speed} - Correct: {correct} - Total: {total}
          </p>
          <img src={animal?.image_link} alt={animal?.diet} />
        </div>
        <div className="timer-container">
          {speed === "Unlimited" ? (
            <p>∞</p>
          ) : (
            <p style={timerRemaining! >= 5 ? {} : { color: "red" }}>
              {timerRemaining}
            </p>
          )}
        </div>
        <form onSubmit={submitHandler}>
          {/* Animal name */}
          <div className="animal-name-question question-container">
            <label className="question-asked" htmlFor="name">
              What is this Animal's name?
            </label>
            {difficulty === "Easy" || difficulty === "Medium" ? (
              <div>
                <p>{animal?.name}</p>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-input"
                />
              </div>
            )}
          </div>
          {/* type of animal */}
          <div className="question-container">
            <label className="question-asked">What Type of Animal?</label>
            <div className="animal-type-container">
              <label htmlFor="amphibian">
                <input
                  type="radio"
                  name="type"
                  id="amphibian"
                  value="Amphibian"
                  checked={type === "Amphibian"}
                  onChange={(e) => setType(e.target.value)}
                />
                Amphibian{" "}
              </label>
              <label htmlFor="bird">
                <input
                  type="radio"
                  name="type"
                  id="bird"
                  value="Bird"
                  checked={type === "Bird"}
                  onChange={(e) => setType(e.target.value)}
                />
                Bird{" "}
              </label>

              <label htmlFor="fish">
                <input
                  type="radio"
                  name="type"
                  id="fish"
                  value="Fish"
                  checked={type === "Fish"}
                  onChange={(e) => setType(e.target.value)}
                />
                Fish{" "}
              </label>

              <label htmlFor="mammal">
                <input
                  type="radio"
                  name="type"
                  id="mammal"
                  value="Mammal"
                  checked={type === "Mammal"}
                  onChange={(e) => setType(e.target.value)}
                />
                Mammal{" "}
              </label>

              <label htmlFor="marsupial">
                <input
                  type="radio"
                  name="type"
                  id="marsupial"
                  value="Marsupial"
                  checked={type === "Marsupial"}
                  onChange={(e) => setType(e.target.value)}
                />
                Marsupial{" "}
              </label>

              <label htmlFor="reptile">
                <input
                  type="radio"
                  name="type"
                  id="reptile"
                  value="Reptile"
                  checked={type === "Reptile"}
                  onChange={(e) => setType(e.target.value)}
                />
                Reptile{" "}
              </label>
            </div>
          </div>

          {/* active time */}
          <div className="question-container">
            <label className="question-asked">
              When is this Animal active?
            </label>
            {difficulty === "Easy" ? (
              <div>
                <p>{animal?.active_time}</p>
              </div>
            ) : (
              <div className="active-container">
                <label htmlFor="diurnal">
                  {" "}
                  <input
                    type="radio"
                    name="active_time"
                    id="diurnal"
                    value="Diurnal"
                    checked={active === "Diurnal"}
                    onChange={(e) => setActive(e.target.value)}
                  />
                  Diurnal (Daytime)
                </label>

                <label htmlFor="nocturnal">
                  {" "}
                  <input
                    type="radio"
                    name="active_time"
                    id="nocturnal"
                    value="Nocturnal"
                    checked={active === "Nocturnal"}
                    onChange={(e) => setActive(e.target.value)}
                  />
                  Nocturnal (Nighttime)
                </label>
              </div>
            )}
          </div>
          {/* latin name */}
          <div className="question-container">
            <label htmlFor="latin_name" className="question-asked">
              What is this Animal's Latin name?
            </label>
            {difficulty === "Insanus" ? (
              <div>
                <input
                  type="text"
                  name="latin_name"
                  id="latin_name"
                  value={latinName}
                  onChange={(e) => setLatinName(e.target.value)}
                  className="text-input"
                />
              </div>
            ) : (
              <div>
                <p>{animal?.latin_name}</p>
              </div>
            )}
          </div>
          <div className="button-container">
            <button className="whatzie-button">Whatsie!</button>
            <button className="endSession-button" onClick={endSession}>
              End Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
