import React from 'react';
import { useSetRecoilState } from 'recoil';
import { postId } from '../store/atom/postId';

export const Buttons = () => {
  const setPostId = useSetRecoilState(postId);

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {/* Buttons */}
      <button
        onClick={() => setPostId(1)}
        className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg hover:bg-opacity-40 transition-all transform hover:scale-105"
      >
        Post 1
      </button>
      <button
        onClick={() => setPostId(2)}
        className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg hover:bg-opacity-40 transition-all transform hover:scale-105"
      >
        Post 2
      </button>
      <button
        onClick={() => setPostId(3)}
        className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg hover:bg-opacity-40 transition-all transform hover:scale-105"
      >
        Post 3
      </button>
      <button
        onClick={() => setPostId(4)}
        className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg hover:bg-opacity-40 transition-all transform hover:scale-105"
      >
        Post 4
      </button>
      <button
        onClick={() => setPostId(5)}
        className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg hover:bg-opacity-40 transition-all transform hover:scale-105"
      >
        Post 5
      </button>
    </div>
  );
};

