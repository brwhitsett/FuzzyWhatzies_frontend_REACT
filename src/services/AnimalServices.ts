import Animal from "../models/Animal";
import axios from "axios";

export const getSingleAnimal = async (): Promise<Animal> => {
  return (await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand"))
    .data;
};
