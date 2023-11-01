import ResultList from "./ResultList/ResultList";

export default function Result({ data=[], getCurrentQuestion=()=>{}  }){

  return (
    <section className="flex justify-center items-center flex-wrap gap-10">
      <ResultList data={data} getCurrentQuestion={getCurrentQuestion}/>
    </section>
  );
}