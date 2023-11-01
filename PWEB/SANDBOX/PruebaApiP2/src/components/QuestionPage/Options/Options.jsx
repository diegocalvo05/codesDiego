 
const shuffle = (array=[]) => { //genera un orden aleatorio en un array
  return array.sort(() => Math.random() - 0.5); 
}; 


export default function Options({data={}}) {

  const allAnswers = Array.isArray(data.incorrect_answers)?[...data.incorrect_answers, data.correct_answer]:[];
  const answersArray = shuffle(allAnswers);
  let canChoose = true;

  const onClickHandler = (evento) => {
    
    if(canChoose){
      if(evento.target.value === data.correct_answer){
        evento.target.style.backgroundColor = "rgb(163 230 53)";
        canChoose = false;
        //alert("Respuesta correcta");
      } else {
        evento.target.style.backgroundColor = "rgb(239 68 68)";
        canChoose = false;
        //alert("Respuesta incorrecta");
      }
    }
  }


  return (
    <section className="flex justify-center items-center">
      {
        answersArray.map((r) => {
          return (
            <button key={Math.random()}
                    value={r}
                    className="text-black font-bold w-64 h-24 bg-[#E0E0E0] rounded-lg 
                        flex justify-center items-center m-4 hover:cursor-pointer hover:bg-cyan-300 hover:transition-all hover:duration-500"
                    onClick={onClickHandler}
            >
              {r}
            </button>
          )
        })
      }
      
    </section>
  );
}