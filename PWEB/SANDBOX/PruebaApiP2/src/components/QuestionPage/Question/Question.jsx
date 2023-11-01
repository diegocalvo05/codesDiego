

export default function Question({ data={} }) {

  return (
    <div className="text-black font-bold text-2xl bg-[#E0E0E0] m-10 w-full h-64 p-8 flex justify-center items-center rounded-lg ">
      <h3>{data.question}</h3>
    </div>
  );
}