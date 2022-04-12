import { FormEvent, useEffect, useState } from "react";
import "./QuestionCard.css";
import { getSingleAnimal } from "../services/AnimalServices";
import Animal from "../models/Animal";

interface Props {
  difficulty: string;
  speed: string;
}

const QuestionCard = ({ difficulty, speed }: Props) => {
  const [animal, setAnimal] = useState<Animal>();
  const [timer, setTimer] = useState<number>();
  const [questionEvaluation, setQuestionEvaluation] = useState<boolean>(false);

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

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  useEffect(() => {
    getAndSetAnimal();
    getAndSetTimer();
  }, []);

  return (
    <div className="QuestionCard">
      <p className="gameSettingsBar">
        {difficulty} - {speed}
      </p>
      <div className="timer-container">
        {" "}
        <p>Timer:</p>
        <p>{timer}</p>
      </div>
      <img src={animal?.image_link} alt="" />

      <form>
        <p>{}</p>
        <h2>Whatsies?</h2>

        {/* Animal name */}
        <label htmlFor="name">What is this Animal's name?</label>
        {difficulty === "Easy" || difficulty === "Medium" ? (
          <div>
            <p>{animal?.name}</p>
          </div>
        ) : (
          <div>
            <input type="text" name="name" id="name" />
          </div>
        )}

        {/* type of animal */}
        <div>
          <p>What Type of Animal?</p>

          <input type="radio" name="type" id="amphibian" />
          <label htmlFor="amphibian">Amphibian</label>

          <input type="radio" name="type" id="bird" />
          <label htmlFor="bird">Bird</label>

          <input type="radio" name="type" id="fish" />
          <label htmlFor="fish">Fish</label>

          <input type="radio" name="type" id="mammal" />
          <label htmlFor="mammal">Mammal</label>

          <input type="radio" name="type" id="marsupial" />
          <label htmlFor="marsupial">Marsupial</label>

          <input type="radio" name="type" id="reptile" />
          <label htmlFor="reptile">Reptile</label>
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
              value={"Diurnal"}
            />
            <label htmlFor="diurnal">Diurnal (Daytime)</label>

            <input type="radio" name="active_time" id="nocturnal" />
            <label htmlFor="nocturnal">Nocturnal (Nighttime)</label>
          </div>
        )}

        {/* latin name */}
        <label htmlFor="latin_name">What is this Animal's Latin name?</label>
        {difficulty === "Insanus" ? (
          <div>
            <input type="text" name="latin_name" id="latin_name" />
          </div>
        ) : (
          <div>
            <p>{animal?.latin_name}</p>
          </div>
        )}
      </form>
      <button onSubmit={submitHandler}>Whatsie!</button>
    </div>
  );
};

export default QuestionCard;
