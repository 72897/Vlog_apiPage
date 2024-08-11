import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[70px]">
      <Header />
      <div>
        <div>
          <button
            onClick={() => navigation(-1)}
            className=" fixed border-2 border-gray-300 py-1 px-4 rounded-md left-[450px]"
          >
            Back
          </button>
        </div>
        <h2 className="font-bold text-[20px]">
          Blog Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
