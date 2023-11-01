
import categories from "../../assets/categories.json";
import difficulty from "../../assets/difficulty.json";


export default function Search({ getFilter = () => {} }) {

  

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const opt = [e.target[0].value, e.target[1].value, e.target[2].value];
    console.log(e.target[0].value)

    getFilter(opt);
  }

  
  return (
   
    <section className="m-12">
      <form className="flex justify-center items-center gap-12 "
        onSubmit={onSubmitHandler}  
      >
        <input type="number" placeholder='#' className="p-4 w-20 text-lg rounded-lg border-2 border-black"/>

        <select className="p-4 rounded-lg">
          <option value={null}>
            Categorias
          </option>
          {
            categories.map((r) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })
          }
        </select>
        
        <select className="p-4 rounded-lg border-2 border-black">
          <option value={""}>
            Dificultad
          </option>
          {
            difficulty.map((r) => {
              return(
                <option key={r.id} value={r.difficulty}>
                  {r.difficulty}
                </option>
              );
            })
          }
        </select>

        <button type="submit" className="bg-white p-4 rounded-lg border-2 border-black hover:bg-cyan-300 hover:transition-all hover:duration-500"> Buscar </button> 

      </form>
    </section>
    
    
  );
}