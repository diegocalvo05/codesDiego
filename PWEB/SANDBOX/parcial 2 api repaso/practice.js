const axios = require("axios");

const apiFetch = async (n=10, category=0) => {
  const { data } = await axios.get(`https://opentdb.com/api.php?amount=${n}&category=${category}`);

  return data.results;
}

const main = async () => {

  const datos = await apiFetch(10, 21);

  console.log(datos);
}

main();