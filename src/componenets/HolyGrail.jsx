import React from "react";

const HolyGrail = () => {
  return (
    <>
    <div className="h-screen">
      <header className=" h-1/5 w-full bg-red-600 text-2xl text-center p-5 font-bold ">hey</header>
      <div className="flex w-full h-1/2">
        <aside className=" w-1/5 bg-orange-300 text-center text-2xl p-5 font-bold ">aside</aside>
        <main className=" w-3/5 bg-orange-200 text-center text-2xl font-bold p-5">main</main>
        <nav className=" w-1/5 bg-orange-300 text-center text-2xl font-bold p-5">Navigation</nav>
      </div>
      <footer className="h-1/3 bg-slate-500 text-center text-2xl font-bold p-5">footer</footer>
      </div>
    </>
  );
};

export default HolyGrail