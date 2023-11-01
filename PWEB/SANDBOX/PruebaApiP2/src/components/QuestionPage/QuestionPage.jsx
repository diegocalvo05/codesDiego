import { NavLink } from "react-router-dom";
import Options from "./Options/Options";
import Question from "./Question/Question";
import { GrPrevious } from "react-icons/gr";


/* const data = {
  "category": "Entertainment: Video Games",
  "type": "multiple",
  "difficulty": "medium",
  "question": "Who&#039;s the creator of Geometry Dash?",
  "correct_answer": "Robert Topala",
  "incorrect_answers": [
    "Scott Cawthon",
    "Adam Engels",
    "Andrew Spinks"
  ]
}

 */
export default function QuestionPage({data={}}){

  return (
    <section className="w-full h-[75vh] p-10 flex flex-col justify-center items-center gap-8 ">
      <NavLink to={"/"} className="self-start">
        <GrPrevious size={"3rem"} className="border-2 border-solid border-black bg-white rounded p-1 hover:cursor-pointer  hover:bg-cyan-300 hover:transition-all hover:duration-500"/>
      </NavLink>
      <Question data={data}/>
      <Options data={data}/>
    </section>
  );
}