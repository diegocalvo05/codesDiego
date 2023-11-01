import { NavLink } from "react-router-dom";


export default function ResultList({ data=[], getCurrentQuestion=()=>{} }){



  return (
    <>
      {
        data.map((r) => {
          
          return (
            <NavLink to={"/question"} key={Math.random()}>
              <a key={Math.random()} className="bg-white font-bold rounded-lg p-8 w-80 h-64 flex justify-center items-center hover:cursor-pointer  hover:bg-cyan-300 hover:transition-all hover:duration-500"
                    onClick={() => {getCurrentQuestion(r)}}
              >
                {r.question}
              </a>
            </NavLink>   
          );
        })
      }
    </>
  );
}