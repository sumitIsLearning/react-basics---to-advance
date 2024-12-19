import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { postAtoms } from "../store/atom/postAtoms";
import { postId } from "../store/atom/postId";

const PostCard = () => {
  const id = useRecoilValue(postId);
  const postValueLoadable = useRecoilValueLoadable(postAtoms(id));

  switch (postValueLoadable.state) {
    case "hasValue":
      return (
        <div className="flex justify-center items-center min-h-screen relative">
          <div className="relative w-full max-w-lg p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl z-10 transition-all transform hover:scale-105 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-semibold text-white mb-4">
              {postValueLoadable.contents.title}
            </h2>
            <p className="text-white text-lg">{postValueLoadable.contents.body}</p>
          </div>
        </div>
      );

    case "hasError":
      return (
        <div className="flex justify-center items-center min-h-screen relative">
          <div className="relative w-full max-w-lg p-6 bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl z-10">
            <h2 className="text-xl text-red-500">{postValueLoadable.contents}</h2>
          </div>
        </div>
      );

    case "loading":
      return (
        <div className="flex justify-center items-center min-h-screen relative">
          <div className="relative w-full max-w-lg p-6 bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl z-10">
            <h2 className="text-2xl text-white">Loading...</h2>
          </div>
        </div>
      );

    default:
      return <div></div>;
  }
};

export default PostCard;
