import { fetchTrivia } from "./assets/services/trivia.service";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search"
import Result from "./components/Result/Result"
import QuestionPage from "./components/QuestionPage/QuestionPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  
  useEffect(() => {
    const _fetch = async() => {
      const res = await fetchTrivia(filter[0], filter[1], filter[2]);

      console.log(res);
      setData(res);
    }    
  
    _fetch();

  }, [filter])

  const getFilter = (options) => {

    setFilter(options);
  }

  const getCurrentQuestion = (currentQ) => {
    setCurrentQuestion(currentQ);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Search getFilter={getFilter}/><Result data={data} getCurrentQuestion={getCurrentQuestion}/></>}/>
          <Route path="/question" element={<QuestionPage data={currentQuestion} /> }/>
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App
