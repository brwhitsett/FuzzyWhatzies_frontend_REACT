import { useEffect, useState } from "react";
import Animal from "../models/Animal";
import { getSingleAnimal } from "../services/AnimalServices";

import "./Footer.css";

const Footer = () => {
  const [animal, setAnimal] = useState<Animal>();
  const [randNum, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * (4 - 1 + 1) + 1)
  );

  const getAndSetAnimal = () => {
    getSingleAnimal().then((response) => {
      setAnimal(response);
    });
  };

  useEffect(() => {
    getAndSetAnimal();
  }, []);

  useEffect(() => {
    let myInterval = setInterval(() => {
      clearInterval(myInterval);
      getAndSetAnimal();
      setRandomNumber(Math.floor(Math.random() * (4 - 1 + 1) + 1));
    }, 15000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <footer className="Footer">
      {randNum === 1 && (
        <>
          <h3>
            The {animal?.name}'s Latin Name is {animal?.latin_name}
          </h3>
        </>
      )}
      {randNum === 2 && (
        <>
          <h3>
            The {animal?.name}'s favorite food is/are{" "}
            {animal?.diet.toLowerCase()}
          </h3>
        </>
      )}
      {randNum === 3 && (
        <>
          <h3>
            The {animal?.name}'s Geo Range is {animal?.geo_range}
          </h3>
        </>
      )}
      {randNum === 4 && (
        <>
          <h3>
            The {animal?.name}'s Habitat is {animal?.habitat.toLowerCase()}
          </h3>
        </>
      )}
    </footer>
  );
};

export default Footer;
