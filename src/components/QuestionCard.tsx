import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import "./QuestionCard.css";
import { getSingleAnimal } from "../services/AnimalServices";
import { updateUserData } from "../services/UserServices";
import Animal from "../models/Animal";
import AuthContext from "../context/AuthContext";
import { sendNewSessionData } from "../services/SessionServices";
import { useNavigate } from "react-router-dom";

interface Props {
  difficulty: string;
  speed: string;
}

const QuestionCard = ({ difficulty, speed }: Props) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal>();
  const [timer, setTimer] = useState<number>();
  let [timerRemaining, setTimerRemaining] = useState<number>();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [active, setActive] = useState<string>("");
  const [latinName, setLatinName] = useState<string>("");
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  const getAndSetTimer = () => {
    if (speed === "Tortise") {
      setTimer(45);
    } else if (speed === "Cheetah") {
      setTimer(30);
    } else if (speed === "Peregrine Falcon") {
      setTimer(15);
    } else {
      setTimer(Infinity);
    }
  };

  const calculateTimerRemaining = () => {
    timerRemaining = timerRemaining!--;
    return timerRemaining;
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

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    updateUserData(user?.uid!, {
      difficulty,
      correct: checkAnswers(difficulty),
    });
    if (checkAnswers(difficulty)) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    setTotal(total + 1);

    setActive("");
    setType("");
    setLatinName("");
    setName("");
    console.log(checkAnswers(difficulty));
  };

  useEffect(() => {
    getAndSetAnimal();
    getAndSetTimer();
    setTimerRemaining(timer);
  }, [total]);

  useEffect(() => {
    const countdown = setTimeout(() => {
      setTimerRemaining(calculateTimerRemaining());
    }, 1000);
  });

  return (
    <div className="QuestionCard">
      <p className="gameSettingsBar">
        {difficulty} - {speed}
      </p>
      <div className="timer-container">
        <p>Timer:</p>
        <p>{timerRemaining}</p>
      </div>
      <img src={animal?.image_link} alt="" />

      <form onSubmit={submitHandler}>
        {/* Animal name */}
        <label htmlFor="name">What is this Animal's name?</label>
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
            />
          </div>
        )}

        {/* type of animal */}
        <div className="type-question">
          <label>What Type of Animal?</label>
          <div>
            <input
              type="radio"
              name="type"
              id="amphibian"
              value="Amphibian"
              checked={type === "Amphibian"}
              // onClick={setChecked(true)}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="amphibian">Amphibian</label>

            <input
              type="radio"
              name="type"
              id="bird"
              value="Bird"
              checked={type === "Bird"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="bird">Bird</label>

            <input
              type="radio"
              name="type"
              id="fish"
              value="Fish"
              checked={type === "Fish"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="fish">Fish</label>

            <input
              type="radio"
              name="type"
              id="mammal"
              value="Mammal"
              checked={type === "Mammal"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="mammal">Mammal</label>

            <input
              type="radio"
              name="type"
              id="marsupial"
              value="Marsupial"
              checked={type === "Marsupial"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="marsupial">Marsupial</label>

            <input
              type="radio"
              name="type"
              id="reptile"
              value="Reptile"
              checked={type === "Reptile"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="reptile">Reptile</label>
          </div>
        </div>

        {/* active time */}
        <p>When is this Animal active?</p>
        {difficulty === "Easy" ? (
          <div>
            <p>{animal?.active_time}</p>
          </div>
        ) : (
          <div>
            <input
              type="radio"
              name="active_time"
              id="diurnal"
              value="Diurnal"
              checked={active === "Diurnal"}
              onChange={(e) => setActive(e.target.value)}
            />
            <label htmlFor="diurnal">Diurnal (Daytime)</label>

            <input
              type="radio"
              name="active_time"
              id="nocturnal"
              value="Nocturnal"
              checked={active === "Nocturnal"}
              onChange={(e) => setActive(e.target.value)}
            />
            <label htmlFor="nocturnal">Nocturnal (Nighttime)</label>
          </div>
        )}

        {/* latin name */}
        <label htmlFor="latin_name">What is this Animal's Latin name?</label>
        {difficulty === "Insanus" ? (
          <div>
            <input
              type="text"
              name="latin_name"
              id="latin_name"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <p>{animal?.latin_name}</p>
          </div>
        )}
        <div className="button-container">
          <button className="whatzie-button">Whatsie!</button>
          <button className="endSession-button" onClick={endSession}>
            End Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionCard;
