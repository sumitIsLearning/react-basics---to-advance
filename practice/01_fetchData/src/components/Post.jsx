import React  from "react";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:4444/graphql",
    "POST"
  );
  return (
    <div>
      {error
        ? error
        : loading
        ? "Loading..."
        : data.map((data) => (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
          ))}
    </div>
  );
};

export default Post;
