import axios from "axios";

export const fetchDogs = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.get("https://random.dog/woof.json");
      resolve(response);
    } catch {
      reject(error);
    }
  });
};
