import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
const CategoryPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[70px]">
      <Header />
      <div>
        <div>
          <button
            className=" fixed border-2 border-gray-300 py-1 px-4 rounded-md left-[450px]"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
        <h2 className="font-bold text-[20px]">
          Blogs On <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
