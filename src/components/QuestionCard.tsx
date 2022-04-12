import { useEffect, useState } from "react";
import "./QuestionCard.css";
import { getSingleAnimal } from "../services/AnimalServices";
import Animal from "../models/Animal";

const QuestionCard = () => {
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
      <img src={animal?.image_link} alt="" />
    </div>
  );
};

export default QuestionCard;
