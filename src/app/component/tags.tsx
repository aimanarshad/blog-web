export default function Tags() {
  return (
    <>
      <div className="grid lg:grid-row-2 md:grid-rows-5 mt-10 mb-10 bg-slate-400">
        <h1 className="item-center text-center font-bold text-[40px]">Tags</h1>
        <ul className="flex flex-row justify-center item-center gap-10 font-normal text-2xl mt-10  text-gray-900 ">
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center border-black rounded-md shadow-lg">
            Salad
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Recipes
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Tips
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Places
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Friends
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Travel
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Exercise
          </li>
        </ul>
        <ul className="flex flex-row justify-center item-center gap-7 mt-5 text-2xl mb-10 ">
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Reading
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Running
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Self-help
          </li>
          <li className="bg-slate-200 hover:bg-black hover:text-white w-[130px] h-15 text-center  border-black rounded-md shadow-lg">
            Vacations
          </li>
        </ul>
      </div>
    </>
  );
}
