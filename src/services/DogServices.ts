import DogFact from "../models/DogFact";
import axios from "axios";

export const getSingleDogFact = (): Promise<DogFact> => {
  return axios
    .get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
    .then((response) => {
      return response.data;
    });
};
