import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  let user = null;
  return (
    <>
      <header>
        <section className="pt-[15px] pb-[15px]  bg-[#b00606]">
          <div className="container">
            <ul className="flex">
              <li className="pr-[117px] pt-[10px]">
                <Link to={"/about"}>
                  <img src="logo.svg" alt="logo" />
                </Link>
              </li>
              <li className="pr-[60px]">
                <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-[8px] flex items-center gap-3  duration-300 ease-in-out transition-transform transform hover:scale-105 hover:shadow-lg">
                  <Link to={"/"}>Katalog</Link>
                </button>
              </li>
              <li>
                <form className="pr-[120px]">
                  <input
                    className="border border-gray-200 py-2 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mr-2"
                    type="text"
                    placeholder="Maxsulotlarni izlash"
                  />
                </form>
              </li>
              <li className="gap-[100px] flex">
                <Link>
                  {" "}
                  <img
                    src="header.svg"
                    alt="icon"
                    className="transition-transform transform hover:scale-105 hover:shadow-lg"
                  />
                </Link>

                <Link to={"/profile"}>
                  <img
                    src="header2.svg"
                    alt="icon"
                    className="transition-transform transform hover:scale-105 hover:shadow-lg"
                  />
                </Link>
              </li>
              <li className="pl-[100px]">
                <button className="p-3 px-6 bg-gradient-to-r from-orange-400 to-red-600 rounded-[10px] duration-300 ease-in-ou transition-transform transform hover:scale-105 hover:shadow-lgt   ">
                  <Link to={"/contact"}>Contact</Link>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main className="h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
