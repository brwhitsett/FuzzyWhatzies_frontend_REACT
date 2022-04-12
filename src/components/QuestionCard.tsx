import { useEffect, useState } from "react";
import "./QuestionCard.css";
import { getSingleAnimal } from "../services/AnimalServices";
import Animal from "../models/Animal";

interface Props {
  difficulty: string;
  speed: string;
}

const QuestionCard = ({ difficulty, speed }: Props) => {
  const [animal, setAnimal] = useState<Animal>();

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  useEffect(() => {
    getAndSetAnimal();
  }, []);

  return (
    <div className="QuestionCard">
      {console.log(difficulty)}
      <p className="gameSettingsBar">
        {difficulty} - {speed}
      </p>
      <img src={animal?.image_link} alt="" />
      <form>
        <h2>Fuzzy Whatsies</h2>
        <label htmlFor="name">What is this Animal's name?</label>
        {difficulty === "Easy" ? (
          <p>{animal?.name}</p>
        ) : (
          <p>TODO Input for Animal Name</p>
        )}
        {/* active time */}
        <p>When is this Animal active?</p>

        <input type="radio" name="active_time" id="diurnal" />
        <label htmlFor="diurnal">Diurnal (Daytime)</label>

        <input type="radio" name="active_time" id="nocturnal" />
        <label htmlFor="nocturnal">Nocturnal (Nighttime)</label>
        {/* type of animal */}
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
        <p></p>
        <label htmlFor="latin_name">What is this Animal's Latin name?</label>
        <input type="text" name="latin_name" id="latin_name" />
      </form>
    </div>
  );
};

export default QuestionCard;
