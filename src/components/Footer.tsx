import { useEffect, useState } from "react";
import DogFact from "../models/DogFact";
import { getSingleDogFact } from "../services/DogServices";
import "./Footer.css";

const Footer = () => {
  const [dogFact, setDogFact] = useState<DogFact>();

  const getAndSetDogFact = () => {
    getSingleDogFact().then((response) => {
      setDogFact(response);
    });
  };

  useEffect(() => {
    getAndSetDogFact();
  }, []);

  return (
    <footer className="Footer">
      {console.log(dogFact)}

      {<h3>{dogFact?.fact}</h3>}
    </footer>
  );
};

export default Footer;
