import axios from "axios";

export const fetchTrivia = async(n=0, category=0, difficulty="") => {

  const { data } = await axios.get(`https://opentdb.com/api.php?amount=${n}&category=${category}&difficulty=${difficulty}`);

  return data.results;
}