import Animal from "../models/Animal";
import axios from "axios";

export const getSingleAnimal = (): Promise<Animal> => {
  return axios
    .get("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
