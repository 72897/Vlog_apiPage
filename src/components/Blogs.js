import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-3 my-[50px] justify-center items-center">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
